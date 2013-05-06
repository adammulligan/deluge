config = require "../config"

exports.index = (req, res) ->
  Rtorrent = require('../lib/rtorrent')
  rtorrent = new Rtorrent(config.RTORRENT_HOST, config.RTORRENT_PATH, config.RTORRENT_PORT)

  rtorrent.torrents(
    (torrents) ->
      res.render 'index', torrents: JSON.stringify(torrents, null, "\t")
  , (error) ->
    res.statusCode = 500
    res.render '404', 500
  )
