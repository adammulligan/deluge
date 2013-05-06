$(document).ready ->
  window.deluge_socket ||= io.connect('/')
  deluge_socket.emit('subscribe')
