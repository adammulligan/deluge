window.Backbone ||= {}
window.Backbone.Collections ||= {}

class Backbone.Collections.TorrentCollection extends Backbone.Collection
  model: Backbone.Models.Torrent
  
