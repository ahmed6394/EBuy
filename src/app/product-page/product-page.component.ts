import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { ProductsService } from '../service/products/products.service';
import { Products } from '../shared/models/products';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product!: Products;
  constructor(
    private activatedRout: ActivatedRoute,
    private service: ProductsService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRout.params.subscribe((params) => {
      if (params['id']) this.product = service.getProductByID(params['id']);
    });
  }

  ngOnInit(): void {}
  addToCart() {
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
    console.log('Click working');
  }
}
