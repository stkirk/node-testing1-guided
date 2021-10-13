function gimmeFive() {
  return 5
}

test('it returns number 5', () => { // the actual test
  // we assert that something (usually the return value of a function) is something
  const actual = gimmeFive()
  const expected = 5
  // assertions
  expect(actual).toBe(expected)
  expect(actual).toBeGreaterThan(4)
  expect(actual).toBeLessThan(6)
})

describe('Car class', () => {
  
})
