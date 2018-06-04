const path = require('path')
const fs = require('fs')
const continueArt = require('./index.js').continueArt

module.exports = function addComment (input) {
  fs.writeFile('comment.txt', input, (err) => {
    if (err) {
      console.error(err)
    }
    else {
      console.log('The comment has been saved.')
      continueArt()
    }
  })
}