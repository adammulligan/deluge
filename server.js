var app, port;

app = require('./.app');
config = require('./.app/config/app')
io = require('socket.io').listen(app)

port = app.port;

app.listen(port, function() {
  return console.log("Listening on " + port + "\nPress CTRL-C to stop server.");
});

Rtorrent = require('./.app/lib/rtorrent')
rtorrent = new Rtorrent(config.RTORRENT_HOST, config.RTORRENT_PATH, config.RTORRENT_PORT)

var room = 'rtorrent';
setInterval(function() {
  if (io.sockets.clients(room).length > 0) {
    rtorrent.torrents(function(torrents) {
      io.sockets.in(room).emit('torrents', torrents)
    }, function(error) { console.log(error); });
  }
},5000)

io.sockets.on('connection', function (socket) {
  socket.on('subscribe', function(data) { socket.join(room); });
  socket.on('unsubscribe', function(data) { socket.leave(room); });
})
