/* eslint-disable lines-between-class-members */
import Inventory from '../inventory';

class Shop {
  inventory = new Inventory();
  name: string;
  registrationNo: string;

  constructor(name: string, registrationNo: string) {
    this.name = name;
    this.registrationNo = registrationNo;
  }
}

export default Shop;
