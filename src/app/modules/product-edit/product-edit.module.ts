import { ProductEditRoutingModule } from './product-edit-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [ProductEditComponent],
  imports: [CommonModule, ProductEditRoutingModule, ReactiveFormsModule, BsDatepickerModule.forRoot(),]
})
export class ProductEditModule { }
