import { Component, OnInit ,NgModule ,Input } from '@angular/core';
import {ViewComponent} from "../view/view.component";

//Route
import { Router } from "@angular/router";
//Service
import { AddService } from '../Service/add.service';
//Model
import { User } from '../Model/User';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
@NgModule({
  declarations:[
    Router,
    ViewComponent
  ]
})
export class AddComponent implements OnInit {
  User?: User;
  Users?: User;
  active = true;

  constructor
  (
      private router: Router,
      private Add:AddService
  ) {
    this.User = this.Add.User;
  }

  ngOnInit() {}

    Change() {
      this.Add.sendMessage(this.User);
    }
    CheckNum(event) {
      if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false;
      }
    }
    CheckEng(event){
      if ((event.keyCode < 97 || event.keyCode > 122 ) && (event.keyCode < 65 || event.keyCode > 90)) {
        event.returnValue = false;
      }
    }
    CheckTh(event){
      if((event.keyCode < 65 || event.keyCode > 90) && (event.keyCode < 3585 || event.keyCode > 3675)){
        event.returnValue = false;
      }
    }
}
