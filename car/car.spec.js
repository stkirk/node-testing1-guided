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
    expected = { model: 'f150' }
    expect(car).toMatchObject(expected)
  })

  test('cars built with Car have a make { make: "Toyota" }', () => {
    let expected = { make: 'Toyota' }
    // expect(car).toBe({ model: 'Prius', make: 'Toyota' }) // ERROR!!
    // expect(car).toEqual({ model: 'Prius', make: 'Toyota' }) // FRAGILE!!
    expect(car).toMatchObject(expected) // much better
    expect(car).toHaveProperty('make') // does not care about value
    expect(car).toHaveProperty('make', 'Toyota') // cares about prop and value
    expect(car.make).toBe('Toyota')
  })

  test('cars all start with an odometer at zero', () => {
    expect(car.odometer).toBe(0)
    expect(car).toHaveProperty("odometer", 0)
  })

  test('cars have a drive method inherited from the Car.prototype', () => {
    expect(car).toHaveProperty('drive')
    expect(car.drive).toBeDefined()
    expect(typeof car.drive).toBe('function')
    expect(car.drive).toBeInstanceOf(Function)
    expect(car.drive).toBe(Car.prototype.drive)
  })

  test('driving the car adds miles to the odometer', () => {
    car.drive(50)
    expect(car.odometer).toBe(50) // checking a side effect of driving
    car.drive(50)
    expect(car.odometer).toBe(100)
  })

  test('drive method returns the updated odometer value', () => {
    expect(car.drive(50)).toBe(50) // checking what the function returns
    expect(car.drive(50)).toBe(100)
  })

  test('driveAsync resolves the updated odometer', async () => {
    let actual = await car.driveAsync(30)
    expect(actual).toBe(30)
    actual = await car.driveAsync(50)
    expect(actual).toBe(80)
  })
})
