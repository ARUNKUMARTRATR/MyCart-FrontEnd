import { Router } from '@angular/router';
import { ApiService } from './../../../../core/services/api.service';
import { Component, OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'angularx-social-login';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fullName: string;
  constructor(private data: ApiService, private nav: Router, private authService: AuthService, public spinner: NgxSpinnerService ) {

  }
addNew() {
  this.nav.navigateByUrl('mycart/productadd');
}

showSpinner(name: string) {
  this.spinner.show(name);
  setTimeout(() => {
    this.spinner.hide(name);
    this.authService.signOut();
    sessionStorage.clear();
    this.nav.navigateByUrl('');
  }, 1000);
}
toCart() {
  this.nav.navigateByUrl('mycart/cart');
}
ngOnInit() {
this.fullName = sessionStorage.getItem('fullName');
}
}
