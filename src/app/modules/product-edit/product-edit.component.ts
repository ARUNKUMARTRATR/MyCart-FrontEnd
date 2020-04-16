import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/core';
import { ProductModel } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productAdd: ProductModel;

  editForm = new FormGroup({
    PName: new FormControl('', [Validators.required]),
    PId: new FormControl(''),
    PUrl: new FormControl('', [Validators.required]),
    Des: new FormControl('', [Validators.required]),
    Price: new FormControl('', [Validators.required]),
    LDate: new FormControl('', [Validators.required]),
    Cat: new FormControl({value: 'No Access', disabled: true}),
    IsAvailable: new FormControl('', [Validators.required]),
  });
  constructor(private dataApiService: ApiService, private nav: Router) { }
updateProduct(data) {
  const temp = this.editForm.value;
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
  this.dataApiService.put('api/Products', this.productAdd, {}).subscribe(res => this.nav.navigateByUrl('mycart/dashboard'));

}
  ngOnInit() {
    this.dataApiService.currentMessage.subscribe(message => {
      let temp: ProductModel = JSON.parse(message);
      console.log(temp);
      this.editForm.patchValue({
        PName: temp.productName,
        PId: temp.productId,
        PUrl: temp.photoUrl,
        Des: temp.description,
        Price: temp.price,
        LDate: temp.launchDate,
        Cat: temp.catogoryName,
        IsAvailable: temp.isAvailable
      });
      temp = {
        id: null,
        productId: null,
        productName: null,
        description: null,
        price: null,
        launchDate: null,
        photoUrl: null,
        isAvailable: null,
        isDeleted: null,
        catogoryName: null,
        catogory: null,
        productCart: null
      };
    });
  }

}
