import { Products } from './products';

export class CartItem {
  id!: number;
  /* [x: string]: any; */
  constructor(product: Products) {
    this.product = product;
  }
  product: Products;
  quantity: number = 1;
  get price(): number {
    return this.product.price * this.quantity;
  }
}
