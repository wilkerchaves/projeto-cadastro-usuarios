import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Genre } from '../../models/genre';
import { User } from '../../models/user/user';
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
import { convertDatepickerToBirthDate } from '../../utils/convert-datepicker-to-birth-date';
import { convertPtBrDateToDatepicker } from '../../utils/convert-ptbr-date-to-datepicker';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';
import { NgForm } from '@angular/forms';

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

  @Output('onFormSubmit')
  onFormSubmitEmitter: EventEmitter<void> = new EventEmitter()

  passwordStrengthValue: number = 0;
  minDate: Date | null = null;
  maxDate: Date | null = null;
  dateValue: Date | null = null;
  displayedColumns: Array<string> = ['title', 'band', 'genre', 'favorite'];
  filteredGenreList: Array<Genre> = []

  constructor(private readonly _el: ElementRef) {

  }

  ngOnInit() {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges): void {

    const USER_CHANGED = changes['userSelected']

    if (USER_CHANGED) {
      this.onPasswordChange(this.userSelected.password)
      this.setBirthDateToDatepicker(this.userSelected.birthDate);
      this.filteredGenreList = this.genresList
    }
  }

  displayFn = ((genreID: number): string => {
    const genreFound = this.genresList.find(genre => genre.id === genreID)
    return genreFound ? genreFound.description : "";
  }).bind(this)

  filterGenres(text: string) {

    if (typeof text === 'number') return;

    const search = text.trim().toLowerCase()

    this.filteredGenreList = this.genresList.filter(genre => genre.description.toLowerCase().includes(search))

  }

  alreadyCheckedBox(): boolean {
    return this.userSelected.musics.some(music => music.isFavorite)
  }

  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password)
  }

  onDateChange(event: MatDatepickerInputEvent<any, any>) {
    if (event.value) {
      console.log(convertDatepickerToBirthDate(event.value))
      this.userSelected.birthDate = convertDatepickerToBirthDate(event.value)
    }
  }

  onFormSubmit(form: NgForm) {

    if (form.invalid) {
      this.focusOnInvalidControl(form);

      return;
    }
    this.onFormSubmitEmitter.emit()
  }


  private focusOnInvalidControl(form: NgForm) {
    for (let control of Object.keys(form.controls)) {
      if (form.controls[control].invalid) {
        const invalidControl: HTMLElement = this._el.nativeElement.querySelector(`[name=${control}]`)
        invalidControl.focus()
        break;
      }
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
