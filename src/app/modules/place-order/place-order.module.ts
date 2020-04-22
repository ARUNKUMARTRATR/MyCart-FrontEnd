import { PlaceOrderRoutingModule } from './place-order-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceOrderComponent } from './place-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [PlaceOrderComponent],
  imports: [CommonModule, PlaceOrderRoutingModule, ReactiveFormsModule,
    BsDatepickerModule.forRoot()]
})
export class PlaceOrderModule { }
