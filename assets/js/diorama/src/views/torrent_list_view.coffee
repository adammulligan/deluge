window.Backbone ||= {}
window.Backbone.Views ||= {}

class Backbone.Views.TorrentListView extends Backbone.Diorama.NestingView
  template: Handlebars.templates['torrent_list.hbs']

  initialize: (options) ->
    torrents = options.torrents || {}
    @torrents = new Backbone.Collections.TorrentCollection(torrents)
    window.deluge_socket.on('torrents', @handleTorrentUpdate)

    @render()

  handleTorrentUpdate: (torrents) =>
    @torrents.reset(torrents || [])
    @render()

  render: =>
    @closeSubViews()
    @$el.html(@template(torrents: @torrents.models))
    @renderSubViews()

    return @

  onClose: ->
    @closeSubViews()
