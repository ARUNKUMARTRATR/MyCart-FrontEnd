import { CartPageRoutingModule } from './cart-page-routing.module';
import { CartPageComponent } from './cart-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CartPageComponent],
  imports: [CommonModule, CartPageRoutingModule]
})
export class CartPageModule { }
