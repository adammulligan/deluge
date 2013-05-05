window.Backbone ||= {}
window.Backbone.Views ||= {}

class Backbone.Views.TorrentListView extends Backbone.Diorama.NestingView
  template: Handlebars.templates['torrent_list.hbs']

  initialize: (options) ->
    @torrents = new Backbone.Collections.TorrentCollection()
    @render()

  render: =>
    @closeSubViews()
    @$el.html(@template(torrents: @torrents.models))
    @renderSubViews()

    return @

  onClose: ->
    @closeSubViews()
