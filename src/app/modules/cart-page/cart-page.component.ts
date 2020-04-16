import { ProductModel } from './../../core/models/product.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
cartData: Array<ProductModel>;
  constructor(private dataApiService: ApiService) { }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    this.cartData = [{
      id: 1,
      productId: 'mobile1',
      productName: 'OnePlus 7 Pro',
      description: 'Best mobiles under 10000',
      price: 44000,
      launchDate: '2020-04-01',
      photoUrl: 'assets/1.jpg',
      isAvailable: true,
      isDeleted: false,
      catogoryName: null,
      catogory: null,
      productCart: null
    },
    {
      id: 1,
      productId: 'mobile1',
      productName: 'OnePlus 7T Pro',
      description: 'Best mobiles under 10000',
      price: 44000,
      launchDate: '2020-04-01',
      photoUrl: 'assets/2.jpg',
      isAvailable: true,
      isDeleted: false,
      catogoryName: null,
      catogory: null,
      productCart: null
    }];
  }

}
