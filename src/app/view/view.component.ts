import { Component, OnInit,NgModule } from '@angular/core';
import { AddComponent } from "../add/add.component";

//Service
import { AddService } from '../add/add.service';

//Model
import { User } from '../Model/User';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
@NgModule({
  declarations: [
      AddComponent
  ]
})
export class ViewComponent implements OnInit {
  S_User?: User;

  constructor(
      private Add:AddService
  ) {
    this.S_User = this.Add.User;
  }

  ngOnInit() {

  }

}
