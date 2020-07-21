/* eslint-disable lines-between-class-members */
import { Iitem } from '../interfaces';

class Cart {
  items: Iitem[] = [];
  id: number;

  constructor() {
    this.id = Math.floor(Math.random() * 10);
  }

  addItem = (item: Iitem) => {
    this.items.push(item);
  };

  removeItem = (item: Iitem) => {
    this.items = this.items.filter((_item) => _item.name === item.name);
  };
}

export default Cart;
