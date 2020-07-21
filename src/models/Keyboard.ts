/* eslint-disable lines-between-class-members */
import { IProduct, IHardware } from '../interfaces';

class Keyboard implements IProduct, IHardware {
  readonly #price: number;
  id: string;
  name: string;
  manufacturer: string;
  model: string;
  color: string;

  constructor(name: string, manufacturer: string, price: number, model: string, color: string) {
    this.id = Math.floor(Math.random() * 10).toString();
    this.name = name;
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.#price = price;
  }

  public getPrice = () => {
    return this.#price;
  };
}

export default Keyboard;
