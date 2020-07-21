/* eslint-disable lines-between-class-members */

import { IProduct, IHardware } from '../interfaces';

class Laptop implements IProduct, IHardware {
  readonly #price: number;
  id: string;
  name: string;
  manufacturer: string;
  model: string;
  color: string;
  batteryLife: string;

  constructor(name: string, manufacturer: string, price: number, batteryLife: string, model: string, color: string) {
    this.id = Math.floor(Math.random() * 10).toString();
    this.name = name;
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.batteryLife = batteryLife;
    this.#price = price;
  }

  public getPrice = () => {
    return this.#price;
  };
}

export default Laptop;
