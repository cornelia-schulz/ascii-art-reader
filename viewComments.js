const path = require('path')
const fs = require('fs')

module.exports = function viewComments(file, cb) {
    const dirFile = path.join(__dirname, file)
    fs.readFile(dirFile, 'utf8', (err, commentFile) => {
      cb(err, commentFile)
    })
  }