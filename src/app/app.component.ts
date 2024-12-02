import { Component, OnInit } from '@angular/core';
import { Genre } from './models/genre';
import { State } from './models/state';
import { User } from './models/user/user';
import { BrazilianStatesService } from './services/brazilian-states.service';
import { GenresService } from './services/genres.service';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list-response';
import { GenresListResponse } from './types/genres-list-response';
import { StatesListResponse } from './types/states-list-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  userSelected: User = {} as User;
  userSelectedIndex: number | undefined;


  usersList: UsersListResponse = []
  genresList: GenresListResponse = []
  statesList: StatesListResponse = []

  constructor(
    private readonly _userService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _statesService: BrazilianStatesService,

  ) {

  }
  ngOnInit(): void {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }
  private getStates() {
    this._statesService.getStates().subscribe((statesListResponse) => {
      this.statesList = statesListResponse;
    })
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
  onUserSelected(userIndex: number) {
    const userFound = this.usersList[userIndex]
    if (userFound) {
      this.userSelected = structuredClone(userFound)
      this.userSelectedIndex = userIndex
    }

  }
}

