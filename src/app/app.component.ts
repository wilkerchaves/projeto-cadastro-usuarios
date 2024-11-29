import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usersList: Array<User> = []

  constructor(private readonly _userService: UsersService) {

  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse
    })
  }
}

