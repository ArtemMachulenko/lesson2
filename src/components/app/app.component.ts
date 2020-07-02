import { Component } from '@angular/core';
import { UserService } from "../../services/user/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[];

  constructor(private UserService: UserService) {
    UserService.users().subscribe(data => {
      // console.log(data);
      this.users = data;
    });

  }
}
