import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PublicLayoutComponent } from './components/layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './components/layout/private-layout/private-layout.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

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
  declarations: [
    HeaderComponent,
    FooterComponent,
    PublicLayoutComponent,
    PrivateLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    HttpClientModule,
    RouterModule,
    NgxSpinnerModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PublicLayoutComponent,
    PrivateLayoutComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }]
})
export class SharedModule {}
