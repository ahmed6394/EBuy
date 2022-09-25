import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ProductsService } from '../service/products/products.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart: Cart = new Cart();

  constructor(
    private cartService: CartService,
    private service: ProductsService
  ) {
    this.setCart();
  }

  ngOnInit(): void {}
  setCart() {
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.product.id);
    this.setCart();
  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
    this.setCart();
  }
}
