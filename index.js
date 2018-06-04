module.exports = {
  welcome,
  showFiles,
  continueArt
}

const fs = require('fs')
const path = require('path')
const readline = require('readline')
const getAsciiFiles = require('./getAsciiFiles')
const openAsciiFile = require('./openAsciiFile')
const addComment = require('./addComment')
const rl = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
})

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
  rl.question('What art would you like to look at? \n' + list, (input) => {
    rl.close()
    if (err) {
      console.error(err)
    } else {
      let index = parseInt(input)
      if (index < fileList.length){
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
  // const rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout
  // })

  // rl.question('What art would you like to look at? \n', (input) => {
  //   rl.close()
  //   if (input === '0') {
  //     openAsciiFile('kea.txt', showFile)
  //   } else if (input === '1') {
  //     openAsciiFile('kiwi.txt', showFile)
  //   } else if (input === '2') {
  //     openAsciiFile('nikau.txt', showFile)
  //   } else if (input === '3') {
  //     openAsciiFile('pohutukawa.txt', showFile)
  //   }
  //   process.nextTick(() => {
  //     continueArt()
  //   })
  // })
}

function continueArt () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Would you like to look at more art? y/n \n Press c to leave a comment.', (input) => {
    rl.close()
    if (input === 'y') {
      getAsciiFiles('data', showFiles)
      userInput()
    } else if (input === 'n') {
      process.exit()
    } else if (input === 'c') {
      typeComment()
    } else {
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
    addComment(input)
  })
}


userInput()
