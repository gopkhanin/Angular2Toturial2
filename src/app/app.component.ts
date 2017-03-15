import { Component,NgModule,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

//Component
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';

//Model
import { User } from './Model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  declarations:[
    AddComponent,
    HomeComponent,
    RouterModule
  ]
})
export class AppComponent implements OnInit {
  User:any;
  fullPath:string;
  myPicture:string;

  constructor(){}

  ngOnInit(){
    this.User = new User();
  }
}
