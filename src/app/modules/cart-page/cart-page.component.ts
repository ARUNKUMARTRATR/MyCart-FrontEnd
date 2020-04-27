import { Router } from '@angular/router';
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
  productCart: {
    UserId: number,
    CartProductId: string,
  };
  constructor(private dataApiService: ApiService, private nav: Router) { }
buyItem(product) {
  sessionStorage.setItem('product', JSON.stringify(product));
  this.nav.navigateByUrl('mycart/placeorder');
}

  removeFromCart(item) {
    this.productCart = {
      UserId: +sessionStorage.getItem('userId'),
      CartProductId: item.productId
    };
    this.dataApiService.post('api/ProductCarts/remove', this.productCart, {}).subscribe(result => {
      const filtered = this.cartData.filter(data => data.productId !== item.productId);
      this.cartData = filtered;
    });

  }
  ngOnInit() {
    const uId = sessionStorage.getItem('userId');
    this.dataApiService.get('api/ProductCarts/' + uId, {}).subscribe(result => {
      this.cartData = result;
      console.log(result);
    });

  }

}
