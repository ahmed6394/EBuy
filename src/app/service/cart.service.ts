import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';
import { Products } from '../shared/models/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(product: Products): void {
    let cartItem = this.cart.items.find(
      (item: { product: { id: number } }) => item.product.id == product.id
    );
    if (cartItem) {
      this.changeQuantity(product.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(product));
  }

  removeFromCart(productId: number): void {
    this.cart.items = this.cart.items.filter(
      (item: { product: { id: any } }) => item.product.id != productId
    );
  }

  changeQuantity(quantity: number, productID: number) {
    let cartItem = this.cart.items.find((item) => item.id === productID);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
