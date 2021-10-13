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

  let car // remember closures
  beforeEach(() => {
    // also there's beforeAll, afterAll, afterEach
    car = new Car('Prius', 'Toyota')
  })

  test('Car is defined', () => {
    expect(Car).toBeDefined()
  })

  test('cars built with Car have a model { model: "Prius" }', () => {
    let expected = { model: 'Prius' }
    expect(car).toMatchObject(expected)
    car = new Car('f150', 'Ford')
    expected = { model: 'f150'}
    expect(car).toMatchObject(expected)
  })

  test('cars built with Car have a make { make: "Toyota" }', () => {
    let expected = { make: 'Toyota'}
    expect(car).toMatchObject(expected)
    expect(car.make).toBe('Toyota')
  })
})
