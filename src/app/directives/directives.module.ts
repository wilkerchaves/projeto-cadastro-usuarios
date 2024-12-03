import { NgModule } from '@angular/core';
import { CredentialValidatorDirective } from './credential-validator.directive';
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { PasswordStrengthValidatorDirective } from './password-strength-validator.directive';
import { PasswordConfirmationValidationDirective } from './password-confirmation-validation.directive';


@NgModule({
  imports: [],
  exports: [
    CredentialValidatorDirective,
    EmailPatternValidatorDirective,
    PasswordStrengthValidatorDirective,
    PasswordConfirmationValidationDirective
  ],
  declarations: [
    CredentialValidatorDirective,
    EmailPatternValidatorDirective,
    PasswordStrengthValidatorDirective,
    PasswordConfirmationValidationDirective
  ],
  providers: [],
})
export class DirectivesModule { }
