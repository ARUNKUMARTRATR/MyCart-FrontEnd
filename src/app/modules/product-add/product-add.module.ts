import { ReactiveFormsModule } from '@angular/forms';
import { ProductAddRoutingModule } from './padd-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './product-add.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [ProductAddComponent],
  imports: [CommonModule, ProductAddRoutingModule, ReactiveFormsModule, BsDatepickerModule.forRoot()]
})
export class ProductAddModule { }
