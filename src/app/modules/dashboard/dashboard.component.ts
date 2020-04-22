import { Router } from '@angular/router';
import { ProductModel } from './../../core/models/product.model';
import { ApiService } from './../../core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  productCart: {
    UserId: number,
    CartProductId: string,
  };

  products: Array<ProductModel>;

  cartCount: number;

  constructor(private dataApiService: ApiService, public spinner: NgxSpinnerService, private nav: Router) { }

  removeProduct(id: string) {
    confirm('Are You Sure');
    this.dataApiService.delete('api/Products/' + id, {}).subscribe();
    const filtered = this.products.filter(item => item.productId !== id);
    this.products = filtered;
  }
  addToCart(item: ProductModel) {
    this.productCart = {
      UserId: +sessionStorage.getItem('userId'),
      CartProductId: item.productId
    };
    this.dataApiService.post('api/ProductCarts/add', this.productCart, {}).subscribe(result => alert('Item Added To Cart'));
  }

  editProduct(product: string) {
    const producttemp = JSON.stringify(product);
    this.dataApiService.changeMessage(producttemp);
    this.nav.navigateByUrl('mycart/productedit');

  }
  ngOnInit() {
    this.spinner.show();
    this.dataApiService.get('api/Products', {}).subscribe(data => {
      setTimeout(() => {
        this.spinner.hide();
      }, 1500);
      this.products = data;
      console.log(this.products);
    });
  }
}
