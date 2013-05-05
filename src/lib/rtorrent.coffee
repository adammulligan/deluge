xmlrpc = require('xmlrpc')
_      = require('underscore')
util   = require('util')
events = require("events")

TorrentMethods =
  peers : ['p.get_address=', 'p.get_client_version=', 'p.get_completed_percent=', 'p.get_down_rate=', 'p.get_down_total=', 'p.get_id=', 'p.get_port=', 'p.get_up_rate=', 'p.get_up_total=']
  tracker : ["t.get_group=", "t.get_id=", "t.get_min_interval=", "t.get_normal_interval=", "t.get_scrape_complete=", "t.get_scrape_downloaded=", "t.get_scrape_time_last=", "t.get_type=", "t.get_url=", "t.is_enabled=", "t.is_open=", "t.get_scrape_incomplete="]
  system : ["get_bind", "get_check_hash", "get_dht_port", "get_directory", "get_download_rate", "get_hash_interval", "get_hash_max_tries", "get_hash_read_ahead", "get_http_cacert", "get_http_capath", "get_http_proxy", "get_ip", "get_max_downloads_div", "get_max_downloads_global", "get_max_file_size", "get_max_memory_usage", "get_max_open_files", "get_max_open_http", "get_max_peers", "get_max_peers_seed", "get_max_uploads", "get_max_uploads_global", "get_min_peers_seed", "get_min_peers", "get_peer_exchange", "get_port_open", "get_upload_rate", "get_port_random", "get_port_range", "get_preload_min_size", "get_preload_required_rate", "get_preload_type", "get_proxy_address", "get_receive_buffer_size", "get_safe_sync", "get_scgi_dont_route", "get_send_buffer_size", "get_session", "get_session_lock", "get_session_on_completion", "get_split_file_size", "get_split_suffix", "get_timeout_safe_sync", "get_timeout_sync", "get_tracker_numwant", "get_use_udp_trackers", "get_max_uploads_div", "get_max_open_sockets"]
  torrents : ["d.get_hash=", "d.get_state=", "d.get_name=", "d.get_size_bytes=", "d.get_up_total=", "d.get_ratio=", "d.get_up_rate=", "d.get_down_rate=", "d.get_peers_accounted=", "d.get_base_path=", "d.get_creation_date=", 'd.is_active=', "d.complete=", "d.get_bytes_done=", "d.get_directory="]
  files : ["f.get_completed_chunks=", "f.get_frozen_path=", "f.is_created=", "f.is_open=", "f.get_last_touched=", "f.get_match_depth_next=", "f.get_match_depth_prev=", "f.get_offset=", "f.get_path=", "f.get_path_components=", "f.get_path_depth=", "f.get_priority=", "f.get_range_first=", "f.get_range_second=", "f.get_size_bytes=", "f.get_size_chunks="]

class Rtorrent extends events.EventEmitter
  constructor: (host = 'localhost', path = '/', port = 80) ->
    if _.isObject(host)
      options = host
    else
      options = {host: host, path: path, port: port}

    @service = xmlrpc.createClient(options)

    events.EventEmitter.call(@)

  startPoll: (interval) ->
    @stopPoll()

    @torrents (torrents) =>
      @pollTimer = setInterval( =>
        @torrents (torrents) =>
          @emit('torrents', torrents)
      , interval || 5000)

      @emit('torrents', torrents)
    , (error) =>
      console.log error
      @startPoll(interval || 5000)

  stopPoll: (id) ->
    return clearInterval(id) if id?

    clearInterval(@pollTimer)
    @pollTimer = 0

  torrents: (success, error) ->
    methods = ["default"].concat(TorrentMethods.torrents)
    @service.methodCall('d.multicall', methods, (err, data) =>
      return error.call(@, err) if err?

      torrents = []
      _.each data, (torrent) ->
        torrents.push(new Torrent(torrent))

      success.call(@, torrents)
    )

  getFreeDiskSpace: (success, error) ->
    @service.methodCall('d.multicall', ['default', 'd.free_diskspace='], (err, data) =>
      return error.call(@, err) if err?

      diskspace = data[0]
      success.call(@, diskspace)
    )

class Torrent
  constructor: (fields) ->
    keys = ["hash", "state", "name", "size_bytes", "up_total", "ratio", "up_rate",
      "down_rate", "peers_accounted", "base_path", "creation_date", "is_active",
      "complete", "bytes_done", "directory"]

    _.each fields, (value, index) =>
      key = keys[index]
      @[key] = value

  get: (key) ->
    @[key]

module.exports = Rtorrent
