import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AddComponent } from "./add/add.component";
import { ViewComponent } from "./view/view.component";

const APP_ROUTES: Routes = [
    { path: ''   , component: LoginComponent },
    { path:'add' , component: AddComponent  },
    { path:'view', component: ViewComponent },
    { path:'home', component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);