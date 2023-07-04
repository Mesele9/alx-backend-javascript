const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[brandSymbol] = brand;
    this[motorSymbol] = motor;
    this[colorSymbol] = color;
  }

  cloneCar() {
    const clonedCar = new Car(this[brandSymbol], this[motorSymbol], this[colorSymbol]);
    return clonedCar;
  }
}
