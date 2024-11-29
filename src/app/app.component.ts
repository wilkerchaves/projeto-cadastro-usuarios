import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { GenresService } from './services/genres.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usersList: Array<User> = []
  genresList: Array<{}> = []

  constructor(
    private readonly _userService: UsersService,
    private readonly _genresService: GenresService,

  ) {

  }
  ngOnInit(): void {
    this.getUsers();
    this.getGenres();
  }
  private getGenres() {
    this._genresService.getGenres().subscribe((genresListResponse) => {
      this.genresList = genresListResponse
    })
  }

  private getUsers() {
    this._userService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse
    })
  }
}

