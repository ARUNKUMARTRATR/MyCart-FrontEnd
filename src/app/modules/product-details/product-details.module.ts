import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductEditRoutingModule } from './../product-edit/product-edit-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';



@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule, ProductDetailsRoutingModule
  ]
})
export class ProductDetailsModule { }
