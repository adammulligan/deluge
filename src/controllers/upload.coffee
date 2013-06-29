fs = require('fs')
_  = require('underscore')
config = require "../config"

http = require 'http'
url  = require 'url'
path = require 'path'

copyFileSync = (srcFile, destFile) ->
  BUF_LENGTH = 64*1024
  buff = new Buffer(BUF_LENGTH)
  fdr = fs.openSync(srcFile, 'r')
  fdw = fs.openSync(destFile, 'w')
  bytesRead = 1
  pos = 0
  while bytesRead > 0
    bytesRead = fs.readSync(fdr, buff, 0, BUF_LENGTH, pos)
    fs.writeSync(fdw,buff,0,bytesRead)
    pos += bytesRead
  fs.closeSync(fdr)
  fs.closeSync(fdw)

handleUpload = (req, res) ->
  if !_.isEmpty(req.body["url"])
    file_url = url.parse(req.body["url"])

    filename = path.basename(file_url.pathname)
    file = fs.createWriteStream("#{config.UPLOAD_PATH}/#{filename}", {'flags': 'a'})

    request = http.request(
      host: file_url.hostname
      path: file_url.pathname
      headers: { 'Cookie': "uid=#{config.IPT_UID}; pass=#{config.IPT_PASS}; PHPSESSID=#{config.IPT_PHPSESSID}" }
    , (response) ->
      response.on 'data', (chunk) -> file.write(chunk)
      response.on 'end', ->
        res.render 'upload', flash: 'URL retrieved successfully'
        res.statusCode = 201
    ).on('error', (error) ->
      res.render 'upload', flash: "URL retrieve failed: #{error}"
      res.statusCode = 500
    ).end()
  else
    upload = req.files.file

    if upload.type == 'application/x-bittorrent'
      new_path = "#{config.UPLOAD_PATH}/#{upload.filename}"

      unless fs.existsSync(new_path)
        copyFileSync(upload.path, new_path)

      res.send {message: "Uploaded successfully"}
      res.statusCode = 201

  #res.send {message: "No valid URL or file sent"}
  #res.statusCode = 406

exports.index = (req, res) ->
  if req.method == 'POST'
    return handleUpload(req, res)

  res.render 'upload'
