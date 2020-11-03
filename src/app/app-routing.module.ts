import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
	{
    path: '',
    loadChildren: './modules/home/home.module#HomeModule'
    // loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule',
    // loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'products',
    loadChildren: './modules/product/product.module#ProductModule',
    // loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'cart',
    loadChildren: './modules/cart/cart.module#CartModule',
    // loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'order',
    loadChildren: './modules/checkout/checkout.module#CheckoutModule',
    // loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'merchant',
    loadChildren: './modules/merchant/merchant.module#MerchantModule',
    // loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
