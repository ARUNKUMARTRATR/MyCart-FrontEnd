import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './core/components';
import { PublicLayoutComponent, PrivateLayoutComponent } from './shared';

const routes: Routes = [
  {
    path: 'mycart',
    component: PrivateLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            m => m.DashboardModule
          )
      },
      {
        path: 'productadd',
        loadChildren: () =>
          import('./modules/product-add/product-add.module').then(
            m => m.ProductAddModule
          )
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./modules/cart-page/cart-page.module').then(
            m => m.CartPageModule
          )
      },
      {
        path: 'productedit',
        loadChildren: () =>
          import('./modules/product-edit/product-edit.module').then(
            m => m.ProductEditModule
          )
      },
    ]
  },
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
