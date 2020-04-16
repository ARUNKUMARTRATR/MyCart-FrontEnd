import { Router } from '@angular/router';
import { ProductModel } from 'src/app/core/models/product.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  productAdd: ProductModel;
catData: any;
  profileForm = new FormGroup({
    PName: new FormControl('', [Validators.required]),
    PId: new FormControl('', [Validators.required]),
    PUrl: new FormControl('', [Validators.required]),
    Des: new FormControl('', [Validators.required]),
    Price: new FormControl('', [Validators.required]),
    LDate: new FormControl('', [Validators.required]),
    Category: new FormControl('', [Validators.required]),
    IsAvailable: new FormControl('', [Validators.required]),
  });

  constructor(private dataApiService: ApiService, private nav: Router) {
  }

  addProduct(data) {
    const temp = this.profileForm.value;
    this.productAdd = {
      productName: temp.PName,
      productId: temp.PId,
      photoUrl: temp.PUrl,
      description: temp.Des,
      price: +temp.Price,
      launchDate: data.value,
      catogoryName: temp.Category,
      isAvailable: temp.IsAvailable,
      isDeleted: false,
      id: 0,
      catogory: null,
      productCart: null
    };
    confirm('Are You Sure');
    this.dataApiService.post('api/Products', this.productAdd, {}).subscribe(res => this.nav.navigateByUrl('mycart/dashboard'));
  }
  ngOnInit() { }

}
