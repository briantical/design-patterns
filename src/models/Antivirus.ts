/* eslint-disable lines-between-class-members */
import { IProduct, ISoftware } from '../interfaces';

class Antivirus implements IProduct, ISoftware {
  readonly #price: number;
  id: string;
  name: string;
  manufacturer: string;
  version: string;
  license: string;

  constructor(name: string, manufacturer: string, version: string, license: string, price: number) {
    this.#price = price;
    this.id = Math.floor(Math.random() * 10).toString();
    this.name = name;
    this.manufacturer = manufacturer;
    this.version = version;
    this.license = license;
  }

  getPrice = () => {
    return this.#price;
  };
}

export default Antivirus;
