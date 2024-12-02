import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatInputModule
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatInputModule
    ],
    declarations: [],
    providers: [],
})
export class AngularMaterialModule { }
