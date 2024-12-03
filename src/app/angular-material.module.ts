import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule
    ],
    declarations: [],
    providers: [],
})
export class AngularMaterialModule { }
