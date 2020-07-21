/* eslint-disable lines-between-class-members */
import { Iitem } from '../interfaces';

class Item implements Iitem {
  name: string;
  quantity: number;
  price: number;
  description: string;

  constructor(name: string, quantity: number, price: number, description: string) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.description = description;
  }

  getQuantity() {
    return this.quantity;
  }

  setQuantity(quantity: number) {
    this.quantity = quantity;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price: number) {
    this.price = price;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description: string) {
    this.description = description;
  }

  totalPrice() {
    return this.price * this.quantity;
  }

  toString() {
    return `${this.getQuantity()} ${this.getPrice()} ${this.getDescription()} `;
  }
}

export default Item;
