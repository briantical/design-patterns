/* eslint-disable lines-between-class-members */
import { Iitem, IProduct } from '../interfaces';

class ProductAdapter implements Iitem {
  quantity: number;
  product: IProduct;
  name: string;
  price: number;
  description: string = '';

  constructor(quantity: number, product: IProduct) {
    this.quantity = quantity;
    this.product = product;
    this.name = product.name;
    this.price = product.getPrice();
  }

  getQuantity() {
    return this.quantity;
  }

  setQuantity(quantity: number) {
    this.quantity = quantity;
  }

  getPrice() {
    return this.product.getPrice();
  }

  setPrice(price: number) {
    this.price = this.product.getPrice();
    console.log(`Price is not set: ${price}`);
  }

  getDescription() {
    return this.description;
  }

  setDescription(description: string) {
    this.description = description;
  }

  totalPrice() {
    return this.product.getPrice() * this.quantity;
  }

  toString() {
    return `${this.getQuantity()} ${this.getPrice()} ${this.getDescription()} `;
  }
}

export default ProductAdapter;
