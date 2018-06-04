const path = require('path')
const fs = require('fs')

module.exports = function getAsciiFiles (dir, cb) {
  const dirPath = path.join(__dirname, 'data')
  fs.readdir(dirPath, (err, fileList) => {
    cb(err, fileList)
  })
}

