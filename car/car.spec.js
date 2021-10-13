function gimmeFive() {
  return 5
}

test('it returns number 5', () => {
  // we assert that something (usually the return value of a function) is something
  const actual = gimmeFive()
  const expected = 5
  // assertion
  expect(actual).toBe(expected)
  
})
