import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AddComponent } from "./add/add.component";
import { ViewComponent } from "./view/view.component";

const APP_ROUTES: Routes = [
    { path:'add', component: AddComponent },
    { path:'view', component: ViewComponent},
    { path: '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);