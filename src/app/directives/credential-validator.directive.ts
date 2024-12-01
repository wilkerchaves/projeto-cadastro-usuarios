import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UsersPlaceholdService } from '../services/users-placehold.service';

@Directive({
  selector: '[appCredentialValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => CredentialValidatorDirective),
    multi: true
  }]
})
export class CredentialValidatorDirective implements AsyncValidator {

  @Input('appCredentialValidator')
  propTocheck!: "username" | "email"

  constructor(
    private readonly _usersPlaceholderService: UsersPlaceholdService
  ) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this._usersPlaceholderService.getUsersPlaceholder().pipe(
      map((userListResponse) => {
        const hasUser = userListResponse
          .find(user => user[this.propTocheck].toLowerCase() === control.value.trim().toLowerCase());

        const validatorKey = this.propTocheck === 'email' ? 'invalidEmail' : 'invalidUsername';

        return hasUser ? { [validatorKey]: true } : null

      })
    )
  }



}
