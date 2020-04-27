import { ProductModel } from 'src/app/core/models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
product: ProductModel;
  constructor() { }

  ngOnInit() {
  }

}
