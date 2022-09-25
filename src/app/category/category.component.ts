import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products/products.service';
import { Category } from '../shared/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  category: Category[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.category = this.service.getAllCategory();
  }
}
