import Laptops from './models/Products';
import Inventory from './inventory';

const mac = new Laptops('Macbook Pro', 5, 600, '2hrs');
const inventory = new Inventory();
inventory.addProduct(mac);

console.log(inventory);
