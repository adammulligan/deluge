express = require 'express'
stylus = require 'stylus'
assets = require 'connect-assets'
http = require('http')

app = express()
app.port = process.env.PORT or process.env.VMC_APP_PORT or 3000

# Socket.IO requires an http server to hook into
server = http.createServer(app)
server.listen(app.port)

# Config module exports has `setEnvironment` function that sets app settings depending on environment.
config = require "./config"
app.configure 'production', 'development', 'testing', ->
  config.setEnvironment app.settings.env

app.use assets()
app.use express.static(process.cwd() + '/public')

app.set 'views', process.cwd() + '/src/views'
app.set 'view engine', 'jade'

# bodyParser middleware parses JSON or XML bodies into `req.body` object
app.use express.bodyParser()

routes = require './routes'
routes(app)

io = require('socket.io').listen(server)

Rtorrent = require('./lib/rtorrent')
rtorrent = new Rtorrent(config.RTORRENT_HOST, config.RTORRENT_PATH, config.RTORRENT_PORT)

room = 'rtorrent'
setInterval ->
  if io.sockets.clients(room).length > 0
    rtorrent.torrents(
      (torrents) ->
        io.sockets.in(room).emit('torrents', torrents)
    , (error) ->
      console.log(error)
    )
, 5000

io.sockets.on 'connection', (socket) ->
  socket.on('subscribe', (data) -> socket.join(room) )
  socket.on('unsubscribe', (data) -> socket.leave(room); )

module.exports = server
