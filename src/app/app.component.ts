import { Component, OnInit } from '@angular/core';
import { User } from './models/user/user';
import { BrazilianStatesService } from './services/brazilian-states.service';
import { GenresService } from './services/genres.service';
import { UsersService } from './services/users.service';
import { GenresListResponse } from './types/genres-list-response';
import { StatesListResponse } from './types/states-list-response';
import { UsersListResponse } from './types/users-list-response';
import { MatDialog } from '@angular/material/dialog';
import { UserChangesDialogComponent } from './components/user-changes-dialog/user-changes-dialog.component';

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
    private readonly _matDialog: MatDialog

  ) {

  }
  ngOnInit(): void {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }
  onFormSubmit() {
    if (!this.userSelectedIndex) return;

    const originalUser = this.usersList[this.userSelectedIndex];

    this.openChangesDialog(originalUser, this.userSelected, this.userSelectedIndex);
  }
  private openChangesDialog(originalUser: User, userSelected: User, userSelectedIndex: number) {
    const dialogRef = this._matDialog.open(UserChangesDialogComponent, {
      data: {
        originalUser,
        userSelected
      },
      minWidth: '70%'
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.confirmUserChanges(userSelected, userSelectedIndex);
      }
    })
  }
  confirmUserChanges(userSelected: User, userSelectedIndex: number) {
    this.usersList[userSelectedIndex] = structuredClone(userSelected)
    console.group("Lista de usuarios atualizada")
    console.log("Lista de usuarios atual: " + this.usersList)
    console.groupEnd()
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

