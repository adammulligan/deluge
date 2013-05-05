$(document).ready ->
  window.socket = io.connect('/')
  socket.emit('subscribe')

  $table = $('table#torrents')
  socket.on 'torrents', (torrents) ->
    $table.empty()
    console.log 'refreshing'
    _.each torrents, (torrent) ->
      percentage_complete = if torrent['complete'] == "1"then 100 else (torrent['bytes_done']/torrent['size_bytes'])*100
      percentage_complete = Math.round(percentage_complete)

      size_in_megabytes = Math.round(torrent['size_bytes'] / (1024*1024))
      completed_bytes_in_megabytes = Math.round(torrent['bytes_done'] / (1024*1024))

      down_rate = Math.round(torrent['down_rate'] / 1024)

      $table.append("<tr>
        <td>#{torrent['name']}</td>
        <td>#{size_in_megabytes} MiB</td>
        <td>#{completed_bytes_in_megabytes} MiB (#{percentage_complete}%)</td>
        <td>#{down_rate} KB/s</td>")
