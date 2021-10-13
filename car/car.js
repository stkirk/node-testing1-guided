class Car {
  constructor(model, make) {
    this.model = model;
    this.make = make;
    this.odometer = 0;
  }
  drive(distance) {
    this.odometer += distance
  }
}

module.exports = Car;
