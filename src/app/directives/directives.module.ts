import { NgModule } from '@angular/core';
import { CredentialValidatorDirective } from './credential-validator.directive';
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { PasswordStrengthValidatorDirective } from './password-strength-validator.directive';


@NgModule({
  imports: [],
  exports: [
    CredentialValidatorDirective,
    EmailPatternValidatorDirective,
    PasswordStrengthValidatorDirective
  ],
  declarations: [
    CredentialValidatorDirective,
    EmailPatternValidatorDirective,
    PasswordStrengthValidatorDirective
  ],
  providers: [],
})
export class DirectivesModule { }
