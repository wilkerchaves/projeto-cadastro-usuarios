import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from '../angular-material.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { UsersCardListComponent } from './users-card-list/users-card-list.component';

@NgModule({
  imports: [
    AngularMaterialModule,
    DirectivesModule,
    PipesModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    UsersCardListComponent
  ],
  declarations: [
    UsersCardListComponent
  ],
  providers: [],
})
export class ComponentsModule { }
