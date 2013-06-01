config = require "../config"

exports.index = (req, res) ->
  rtorrent = require('../lib/rtorrent')
  rtorrent = new rtorrent(config.RTORRENT_HOST, config.RTORRENT_PATH, config.RTORRENT_PORT)

  rtorrent.torrents(
    (torrents) ->
      res.render 'list', torrents: JSON.stringify(torrents, null, "\t")
  , (error) ->
    res.statuscode = 500
    res.render '500', error: error
  )
