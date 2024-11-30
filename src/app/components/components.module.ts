import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from '../angular-material.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { UsersCardListComponent } from './users-card-list/users-card-list.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    AngularMaterialModule,
    DirectivesModule,
    PipesModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    UsersCardListComponent,
    UserFormComponent
  ],
  declarations: [
    UsersCardListComponent,
    UserFormComponent
  ],
  providers: [],
})
export class ComponentsModule { }
