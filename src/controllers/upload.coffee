fs = require('fs')
_  = require('underscore')

handleUpload = (req, res) ->
  upload = req.files.file

  unless _.isEmpty(req.body["url"])
    res.send {message: "URL retrieved successfully"}
    res.statusCode = 201
  else
    if upload.type == 'application/x-bittorrent'
      fs.renameSync(upload.path, "/Users/adammulligan/tmp/#{upload.filename}")

      res.send {message: "Uploaded successfully"}
      res.statusCode = 201

  res.send {message: "No valid URL or file sent"}
  res.statusCode = 406

exports.index = (req, res) ->
  if req.method == 'POST'
    return handleUpload(req, res)

  res.render 'upload'
