import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../models/user/user';
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges {

  @Input()
  userSelected: User = {} as User

  @Input()
  genresList: GenresListResponse = []

  @Input()
  statesList: StatesListResponse = []

  passwordStrengthValue: number = 0;

  ngOnChanges(changes: SimpleChanges): void {

    const USER_CHANGED = changes['userSelected']

    if (USER_CHANGED) {
      this.onPasswordChange(this.userSelected.password)
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password)
  }
}
