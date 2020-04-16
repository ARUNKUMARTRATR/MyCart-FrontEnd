import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      '882714637485-s4282t7tn4pju2bfnra722nrr7odh32j.apps.googleusercontent.com'
    )
  }
]);
export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthRoutingModule, NgxSpinnerModule, SocialLoginModule],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }]
})
export class AuthModule {}
