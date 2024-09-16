import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products/detail/:productId', component: ProductDetailComponent },
    { path: 'products/:cat', component: ProductsComponent },
    { path: 'cart', component: CartComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
