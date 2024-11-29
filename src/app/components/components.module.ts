import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from '../angular-material.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports: [
        AngularMaterialModule,
        DirectivesModule,
        PipesModule,
        FormsModule,
        BrowserModule
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class ComponentsModule { }
