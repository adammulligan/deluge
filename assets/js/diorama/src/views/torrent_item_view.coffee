window.Backbone ||= {}
window.Backbone.Views ||= {}

class Backbone.Views.TorrentItemView extends Backbone.View
  template: Handlebars.templates['torrent_item.hbs']

  initialize: (options) ->
    @model = options.torrent
    @render()

  render: ->
    @$el.html(@template(torrent: @model.toJSON()))
    return @

  onClose: ->
    
