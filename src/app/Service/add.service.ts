import { Injectable } from '@angular/core';

//Model
import { User } from '../Model/User';

@Injectable()
export class AddService {
  User: User;

  constructor() {
    this.User = new User();
  }

  sendMessage(Value) {
    this.User = Value;
  }


}
