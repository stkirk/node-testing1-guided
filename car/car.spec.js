const Car = require('./car')

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
  test('Car is defined', () => {
    expect(Car).toBeDefined()
  })

  test('cars built with Car have a model { model: "Prius" }', () => {
    let actual = new Car('Prius')
    let expected = { model: 'Prius' }
    expect(actual).toEqual(expected)
    actual = new Car('f150')
    expected = { model: 'f150'}
    expect(actual).toEqual(expected)
  })
  test('cars built with Car have a make { make: "Toyota" }', () => {
    let actual = new Car('Prius', 'Toyota')
    let expected = { model: 'Prius', make: 'Toyota'}
    expect(actual).toEqual(expected)
  })
})
