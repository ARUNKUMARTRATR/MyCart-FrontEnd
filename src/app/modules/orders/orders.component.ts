import { ProductModel } from 'src/app/core/models/product.model';
import { ApiService } from 'src/app/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Array<ProductModel>;
  constructor(private dataApiService: ApiService) { }

  ngOnInit() {
    this.dataApiService.get('api/ProductOrders', {}).subscribe(result => this.orders = result);
  }

}
