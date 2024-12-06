import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatInputModule,
        MatNativeDateModule,
        MatDividerModule,
        MatDatepickerModule,
        MatSelectModule,
        MatTableModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDialogModule
    ],
    exports: [
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatSelectModule,
        MatTableModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDialogModule
    ],
    declarations: [],
    providers: [],
})
export class AngularMaterialModule { }
