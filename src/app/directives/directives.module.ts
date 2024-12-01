import { NgModule } from '@angular/core';
import { CredentialValidatorDirective } from './credential-validator.directive';
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';


@NgModule({
  imports: [],
  exports: [
    CredentialValidatorDirective,
    EmailPatternValidatorDirective
  ],
  declarations: [
    CredentialValidatorDirective,
    EmailPatternValidatorDirective
  ],
  providers: [],
})
export class DirectivesModule { }
