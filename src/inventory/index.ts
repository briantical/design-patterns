import { IProduct } from '../interfaces';

class Inventory {
  items: IProduct[] = [];

  getItemsCount = () => {
    return this.items.length;
  };

  removeProduct = (product: IProduct) => {
    this.items = this.items.filter((item) => {
      return item.id === product.id;
    });
  };

  addProduct = (product: IProduct) => {
    this.items.push(product);
  };

  editProduct = (product: IProduct) => {
    this.items.map((item) => {
      if (item.id === product.id) {
        item = product;
      }
    });
  };
}

export default Inventory;
