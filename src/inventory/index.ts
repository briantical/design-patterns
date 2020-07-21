import { IProduct } from '../interfaces';

class Inventory {
  products: IProduct[] = [];

  stockedProducts = () => {
    let availableProducts: string = '';
    this.products.map((product) => {
      availableProducts += `${product.name}, `;
    });
    return `Stocked Products: ${availableProducts}`;
  };

  getProductCount = () => {
    return this.products.length;
  };

  removeProduct = (product: IProduct) => {
    this.products = this.products.filter((item) => {
      return item.id === product.id;
    });
  };

  addProduct = (product: IProduct) => {
    this.products.push(product);
  };

  editProduct = (product: IProduct) => {
    this.products.map((item, index) => {
      if (item.id === product.id) {
        this.products[index] = product;
      }
    });
  };
}

export default Inventory;
