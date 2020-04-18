import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user: SocialUser;
  isLoaded: boolean;
  constructor(
    private googleAuthService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private dataApiService: ApiService
  ) { }

  signInWithGoogle(): void {
    this.spinner.show();
    this.googleAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(result => {

      this.dataApiService.post('api/Login', {
        email: result.email,
        fName: result.firstName,
        lName: result.lastName,
        fullName: result.name,
        photoUrl: result.photoUrl
      }, {}).subscribe(res => {
        console.log(res.uId);
        sessionStorage.setItem('userId', res.uId);
        this.router.navigateByUrl('mycart/dashboard');
      });
      this.spinner.hide();
    }, err => this.spinner.hide());
  }
  signOut(): void {
    this.googleAuthService.signOut();
  }

  ngOnInit() {
    this.isLoaded = false;
    this.googleAuthService.authState.subscribe(user =>
      this.isLoaded = true
    , err => this.router.navigateByUrl('not-found'));
  }

}
