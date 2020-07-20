export interface IProduct {
  id: string;
  name: string;
  quantity: number;
  category: string;
  getPrice(): number;
}

export interface IHardware {
  model: string;
  color: string;
}

export interface ISoftware {
  license: string;
}

export interface IAccessory {
  material: string;
}
