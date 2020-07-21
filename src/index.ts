/* eslint-disable lines-between-class-members */
import Shop from './shop';
import LaptopBag from './models/LaptopBag';
import Laptops from './models/Laptop';
import Cart from './cart';
import Item from './cart/Item';
import ProductAdapter from './adapters/ProductAdapter';

class Main {
  shop = new Shop('Elite', '2134959');
  cart = new Cart();

  main = () => {
    const bag = new LaptopBag('African Print bag', 'Katwe boys', 'cloth', 2500);
    const laptop = new Laptops('Macbook Pro', 'Apple', 1200000, '2hrs', '2017', 'silver');

    const item1 = new Item('Oculus', 2, 30000, 'The most advances VR headsets');
    const item2 = new Item('Airpods', 4, 400000, 'The most advance airpods');

    this.shop.inventory.addProduct(bag);
    this.shop.inventory.addProduct(laptop);

    this.cart.addItem(item1);
    this.cart.addItem(item2);
    this.cart.addItem(new ProductAdapter(2, laptop));

    console.log(this.cart.items);
  };
}

new Main().main();
export default Main;
