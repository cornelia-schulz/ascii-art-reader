const index = require('../index.js')

test('testing welcome function', () => {
  const expected = 'Welcome to our page'
  const actual = index.welcome()
  expect(actual).toMatch(expected)
})
