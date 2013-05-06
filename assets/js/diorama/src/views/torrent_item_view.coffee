window.Backbone ||= {}
window.Backbone.Views ||= {}

class Backbone.Views.TorrentItemView extends Backbone.View
  tagName: 'tr'

  template: Handlebars.templates['torrent_item.hbs']

  initialize: (options) ->
    @model = options.torrent
    @render()

  formattedModel: ->
    model = @model.toJSON()
    model['size_in_megabytes'] = Math.round(model['size_bytes'] / (1024*1024))
    model['megabytes_done'] = Math.round(model['bytes_done'] / (1024*1024))
    model['percentage_complete'] = Math.round((model['bytes_done']/model['size_bytes']) * 100)
    model['down_rate'] = Math.round(model['down_rate'] / 1024)

    model['up_rate'] = Math.round(model['up_rate'] / 1024)
    model['megabytes_uploaded'] = Math.round(model['up_total'] / (1024*1024))
    model['ratio'] = (model['ratio'] / 1000).toFixed(2)

    model['is_active'] = model['is_active'] == "1" ? true : false

    return model

  render: ->
    model = @formattedModel()
    @$el.html(@template(torrent: model))
    @$el.addClass('active') if model['is_active']
    return @

  onClose: ->
    
