import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login-component/login-component';
import { PrincipalComponent } from './components/layout/principal-component/principal-component';
import { HomeComponent } from './components/pages/home/home-component/home-component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail';
import { CheckoutComponent } from './components/pages/checkout/checkout';

export const routes: Routes = [
    { path: "login", component: LoginComponent },

    {
        path: "", 
        component: PrincipalComponent, 
        children: [
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", component: HomeComponent },
            { path: "product/:id", component: ProductDetailComponent },
            { path: 'checkout', component: CheckoutComponent }
        ]
    },
    { path: "**", redirectTo: "home" }
];