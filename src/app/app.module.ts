import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';

import { AddService } from './add/add.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AddService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
