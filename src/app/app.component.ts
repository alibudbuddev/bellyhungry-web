import { Component, OnInit } from '@angular/core';
import { User } from '@shared/class/user.class';
import users from '@mock/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angular';
  private users: User[];

  ngOnInit() {
  	this.users = users.map(user => new User(user));
  }
}
