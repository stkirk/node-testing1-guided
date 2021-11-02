// Test away!
const { badCar, Car } = require("./car");

// STEP 1 - add "jest": true to env object in .eslint so linter recognizes jest global variables
//this is a test
test("that it works", () => {
  //empty test is a false positive
  expect(true).not.toBe(false); //this is an assertion
});

describe("badCar", () => {
  //describe is just for organizing
  it("return is a toyota prius", () => {
    //test
    //best tests compare expected against actual
    const actualValue = badCar();
    const expectedValue = { make: "toyota", model: "prius" };

    expect(actualValue).toEqual(expectedValue);
    // use toEqual when comparing shapes like arrays and objects

    // expect(actualValue).toBe(expectedValue); <--false
    //use toBe with primitive values like numbers, strings, booleans as it points to a location in memory that must be the same
    // two objects with the same shape point to different locations in memory
  });
});

describe("Car class", () => {
  // multiple tests require a fresh instance of Car
  // declare prius globally here so all the tests can see it
  let prius;
  // set prius equal to an instance of a new Car before each test runs, don't need to create a new prius each time we want to test it!
  beforeEach(() => {
    prius = new Car("toyota", "prius");
  });
  it("exists", () => {
    // STEP 1 of Test Driven Development --> write the simplest test that will fail (Car class isn't defined as of the time of writing the test)
    // STEP 2 --> write the least amount of code that will make the test pass, scaffold Car class and require it
    // STEP 3 --> refactor the code, add complexity
    expect(Car).toBeDefined();
  });

  it("can build instances of Cars", () => {
    // make an instance of a car with our Car class
    const car = new Car();
    //assert that it is an instance of Car
    expect(car).toBeInstanceOf(Car);
  });

  it("can build a car with make and model", () => {
    // step 1, simpleist test that will fail
    // const prius = new Car("toyota", "prius"); //<-- skip this after adding the beforeEach at the top of the describe block

    // assert that it will have certain properties
    expect(prius).toHaveProperty("make"); //fail at first
    expect(prius).toHaveProperty("model"); //fail at first

    // assert that it will have certain properties with certain values
    expect(prius.make).toBe("toyota");
    expect(prius.model).toBe("prius");
    expect(prius).toHaveProperty("make", "toyota"); //fail at first
    expect(prius).toHaveProperty("model", "prius"); //fail at first
    // assert it is an object with certain shape
    // toEqual will break the test if later on we add properties to Car class
    // expect(prius).toEqual({ make: "toyota", model: "prius" });
    expect(prius).toMatchObject({ make: "toyota", model: "prius" });
  });

  it("new cars have an odometer property initialized at 0", () => {
    expect(prius.odometer).toBe(0);
  });

  //test for the existance of methods
  it("cars have a drive method", () => {
    expect(prius.drive).toBeInstanceOf(Function);
    expect(prius.drive).toBe(Car.prototype.drive);
  });

  it("driving a distance adds miles to the odometer", () => {
    //we get a fresh prius for each test from beforeEach()
    //testing the internal state of the car
    prius.drive(10);
    expect(prius.odometer).toBe(10);
    prius.drive(5);
    expect(prius.odometer).toBe(15);
  });

  it("driving returns the updated odometer", () => {
    // testing the return value of the function
    const expected = 10;
    const actual = prius.drive(10);
    expect(actual).toBe(expected);
  });

  //Async
  it("driving ASYNC returns the updated odometer", async () => {
    // testing the return value of the function
    const expected = 10;
    const actual = await prius.driveAsync(10);
    expect(actual).toBe(expected);
  });
});
