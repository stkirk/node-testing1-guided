// Build a Car class!

function badCar() {
  return {
    model: "prius",
    make: "toyota",
  };
}

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.odometer = 0;
  }
  drive(distance) {
    this.odometer += distance;
    return this.odometer;
  }
  async driveAsync(distance) {
    // returns a promise (not the odometer)
    this.odometer += distance;
    return this.odometer;
  }
}

module.exports = {
  badCar,
  Car,
};
