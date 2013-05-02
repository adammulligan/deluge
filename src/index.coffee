express = require 'express'
stylus = require 'stylus'
assets = require 'connect-assets'

app = express()
app.port = process.env.PORT or process.env.VMC_APP_PORT or 3000

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

module.exports = app
