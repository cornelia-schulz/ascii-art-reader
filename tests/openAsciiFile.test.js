jest.mock('fs', () => {
  return {
    readFile: (file, b, cb) => {
      cb(null, 'test response')
    }
  }
})

const openAsciiFile = require('../openAsciiFile.js')

test('openAsciiFile opens file', (done) => {
  const mockcb = jest.fn()
  openAsciiFile('test.txt', mockcb)
  const length = mockcb.mock.calls.length
  expect(length).toBe(1)
  done()
})
