import { Component, NgModule , OnInit ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  ],
  imports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
  User:any;
  constructor(){}

  ngOnInit(){
    this.User = new User();
  }
}
