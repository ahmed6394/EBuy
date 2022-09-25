import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products/products.service';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../shared/models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productsData: Products[] = [];
  constructor(
    private service: ProductsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchItem'])
        this.productsData = this.service
          .getAll()
          .filter((product) =>
            product.name
              .toLowerCase()
              .includes(params['searchItem'].toLowerCase())
          );
      else if (params['category'])
        this.productsData = this.service.getAllProductsByCategory(
          params['category']
        );
      else this.productsData = this.service.getAll();
    });
  }
}
