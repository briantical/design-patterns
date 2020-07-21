/* eslint-disable lines-between-class-members */
import { IProduct, IAccessory } from '../interfaces';

class LaptopBag implements IProduct, IAccessory {
  readonly #price: number;
  id: string;
  name: string;
  manufacturer: string;
  material: string;

  constructor(name: string, manufacturer: string, material: string, price: number) {
    this.#price = price;
    this.id = Math.floor(Math.random() * 10).toString();
    this.name = name;
    this.manufacturer = manufacturer;
    this.material = material;
  }

  getPrice = () => {
    return this.#price;
  };
}
export default LaptopBag;
