import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login-component/login-component';
import { PrincipalComponent } from './components/layout/principal-component/principal-component';
import { HomeComponent } from './components/pages/home/home-component/home-component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    {
        path: "home", component: PrincipalComponent, children: [{
            path: "",
                component: HomeComponent
        }]
    }
];
