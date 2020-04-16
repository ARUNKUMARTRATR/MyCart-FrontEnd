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

  products: Array<ProductModel>;

  cartCount: number;

  constructor(private dataService: ApiService, public spinner: NgxSpinnerService, private nav: Router) {}

  removeProduct(id: string) {
    this.dataService.delete('api/Products/' + id, {}).subscribe();
    const filtered = this.products.filter(item => item.productId !== id);
    this.products = filtered;
  }


  editProduct(product: string) {
    const producttemp = JSON.stringify(product);
    this.dataService.changeMessage(producttemp);
    this.nav.navigateByUrl('mycart/productedit');

  }
  ngOnInit() {
    this.spinner.show();
    this.dataService.get('api/Products', {}).subscribe(data => {
      setTimeout(() => {
      this.spinner.hide();
    }, 3000);
      this.products = data;
      console.log(this.products);
    });
  }
}
