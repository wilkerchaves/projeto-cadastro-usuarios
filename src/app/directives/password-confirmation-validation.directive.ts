import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordConfirmationValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordConfirmationValidationDirective,
      multi: true
    }
  ]
})
export class PasswordConfirmationValidationDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value.passwordConfirmation) {
      const passwordConfirmationControl = control.get('passwordConfirmation');

      if (control.value.password !== control.value.passwordConfirmation) {
        console.log(control.value.password, control.value.passwordConfirmation)
        passwordConfirmationControl?.setErrors({
          'invalidPasswordConfirmation': true
        })

        return {
          'invalidPasswordConfirmation': true
        }
      }
    }
    return null;
  }
}
