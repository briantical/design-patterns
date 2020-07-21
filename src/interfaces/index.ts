export interface IProduct {
  id: string;
  name: string;
  manufacturer: string;
  getPrice(): number;
}

export interface IHardware {
  model: string;
  color: string;
}

export interface ISoftware {
  license: string;
  version: string;
}

export interface IAccessory {
  material: string;
}

export interface Iitem {
  name: string;
  price: number;
  quantity: number;
  description: string;
  getQuantity(quantity: number): number;
  setQuantity(quantity: number): void;
  getPrice(): number;
  setPrice(price: number): void;
  getDescription(): string;
  setDescription(description: string): void;
  totalPrice(): number;
  toString(): string;
}
