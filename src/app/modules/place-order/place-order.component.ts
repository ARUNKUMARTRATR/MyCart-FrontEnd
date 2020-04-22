import { ProductModel } from './../../core/models/product.model';
import { ApiService } from 'src/app/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  profileForm = new FormGroup({
    FName: new FormControl('', [Validators.required]),
    LName: new FormControl(''),
    Num: new FormControl('', [Validators.required]),
    Add1: new FormControl('', [Validators.required]),
    Add2: new FormControl(''),
    State: new FormControl('', [Validators.required]),
    Dob: new FormControl('', [Validators.required]),
    Zip: new FormControl('', [Validators.required]),
    Terms: new FormControl('', [Validators.required]),
  });
    orderCheck: boolean;
    userProfile: {
    productId: string;
    TotalPrice: number;
    userId: number;
    FName: string;
    LName: string;
    Dob: string;
    Mobile: string;
    Add1: string;
    Add2: string;
    State: string;
    ZipCode: number;
    Terms: boolean
  };
  constructor(private dataApiService: ApiService) { }
placeOrder(data) {
  const productdata: ProductModel = JSON.parse (sessionStorage.getItem('product'));
  const temp = this.profileForm.value;

  this.userProfile = {
    userId: +sessionStorage.getItem('userId'),
    productId: productdata.productId,
    TotalPrice: +productdata.price,
    FName: temp.FName,
    LName: temp.LName,
    Mobile: temp.Num,
    Add1: temp.Add1,
    Add2: temp.Add2,
    State: temp.State,
    ZipCode: +temp.Zip,
    Dob: data,
    Terms: temp.Terms
  };
  console.log(this.userProfile);
  this.dataApiService.post('api/ProductOrders', this.userProfile, {}).subscribe(result => {
    console.log(result);
    this.orderCheck = true;
  });
}
  ngOnInit() {
    this.orderCheck = false;
  }

}
