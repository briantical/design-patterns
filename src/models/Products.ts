/* eslint-disable lines-between-class-members */

import { IProduct } from '../interfaces';

class Laptops implements IProduct {
  readonly #price: number;
  id: string;
  name: string;
  quantity: number;
  category: string;
  batteryLife: string;

  constructor(name: string, quantity: number, price: number, batteryLife: string) {
    this.id = Math.floor(Math.random() * 10).toString();
    this.name = name;
    this.quantity = quantity;
    this.category = 'Hardware';
    this.batteryLife = batteryLife;
    this.#price = price;
  }

  public getPrice = () => {
    return this.#price;
  };
}

export default Laptops;
