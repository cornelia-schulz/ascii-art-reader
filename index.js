module.exports = {
  welcome,
  showFiles,
  showFile,
  userInput,
  continueArt,
  typeComment
}

const fs = require('fs')
const path = require('path')
const readline = require('readline')
const getAsciiFiles = require('./getAsciiFiles')
const openAsciiFile = require('./openAsciiFile')
const addComment = require('./addComment')
const viewComments = require('./viewComments')

function welcome () {
  const message = 'Welcome to our page'
  console.log(message)
  return message
}

function showFiles (err, fileList) {
  let list = ''
  for (let index in fileList) {
    list += index + ': ' + fileList[index] + '\n'
  }
  const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('What art would you like to look at? \n' + list, (input) => {
    console.log('input',input)
    rl.close()
    if (err) {
      console.error(err)
    } else {
      let index = parseInt(input)
      if (index < fileList.length){
        console.log(fileList[index])
        openAsciiFile(fileList[index], showFile)
      }
      else {
        console.log('This number is not on the list')
        getAsciiFiles('data', showFiles)
      }
   }
  })
}

function showFile (err, asciiFile) {
  if (err) {
    console.error(err)
  } else {
    console.log(asciiFile)
    continueArt()
  }
}

function userInput () {
  getAsciiFiles('data', showFiles)
}

function continueArt () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Would you like to look at more art? y/n \n Press c to leave a comment or v to view all comments.', (input) => {
    rl.close()
    if (input === 'y') {
      getAsciiFiles('data', showFiles)
    } else if (input === 'n') {
      process.exit()
    } else if (input === 'c') {
      typeComment()
    } else if (input === 'v'){
      viewComments('comment`.txt', showFile)
    }
    else {
      console.log('Please press y for yes, n for no')
      continueArt()
    }
  })
}

function typeComment () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Type your comment and press enter \n ', (input) => {
    rl.close()
    addComment(input, continueArt)
  })
}

userInput()
