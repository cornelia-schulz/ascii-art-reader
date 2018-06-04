jest.mock('fs', () => {
  return {
    readdir: (path, cb) => {
      cb(null, 'test response')
    }
  }
})

const getAsciiFiles = require('../getAsciiFiles.js')

test('getting all text file within a dir ', (done) => {
  const mockcb = jest.fn()
  const dir = 'test'
  getAsciiFiles(dir, mockcb)
  const length = mockcb.mock.calls.length
  expect(length).toBe(1)
  done()
})
