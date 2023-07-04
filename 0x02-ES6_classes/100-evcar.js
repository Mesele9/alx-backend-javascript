import Car from './10-car';

const _range = Symbol('range');
const _cloneCar = Symbol('cloneCar');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  get range() {
    return this[_range];
  }

  [_cloneCar]() {
    return new Car(this.brand, this.motor, this.color);
  }

  cloneCar() {
    return this[_cloneCar]();
  }
}
