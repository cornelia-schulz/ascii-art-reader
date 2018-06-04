const path = require('path')
const fs = require('fs')

module.exports = function openAsciiFile (file, cb) {
  const dirFile = path.join(__dirname, 'data', file)
  fs.readFile(dirFile, 'utf8', (err, asciiFile) => {
    cb(err, asciiFile)
  })
}