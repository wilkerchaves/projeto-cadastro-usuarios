import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../models/user/user';
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
import { convertPtBrDateToDatepicker } from '../../utils/convert-ptbr-date-to-datepicker';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { convertDatepickerToBirthDate } from '../../utils/convert-datepicker-to-birth-date';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges {


  @Input()
  userSelected: User = {} as User

  @Input()
  genresList: GenresListResponse = []

  @Input()
  statesList: StatesListResponse = []

  passwordStrengthValue: number = 0;
  minDate: Date | null = null;
  maxDate: Date | null = null;
  dateValue: Date | null = null;

  ngOnInit() {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges): void {

    const USER_CHANGED = changes['userSelected']

    if (USER_CHANGED) {
      this.onPasswordChange(this.userSelected.password)
      this.setBirthDateToDatepicker(this.userSelected.birthDate);
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password)
  }

  onDateChange(event: MatDatepickerInputEvent<any, any>) {
    if(event.value) {
      console.log(convertDatepickerToBirthDate(event.value))
      this.userSelected.birthDate = convertDatepickerToBirthDate(event.value)
    }
  }

  private setMinAndMaxDate() {
    const currentYear = new Date().getFullYear()

    this.minDate = new Date(currentYear - 100, 0, 1)
    this.maxDate = new Date()
  }

  private setBirthDateToDatepicker(birthDate: string | Date) {
    this.dateValue = convertPtBrDateToDatepicker(birthDate)
  }
}
