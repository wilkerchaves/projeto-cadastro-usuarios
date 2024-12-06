import { NgModule } from '@angular/core';
import { GenreDescriptionPipe } from './genre-description.pipe';
import { StateDescriptionPipe } from './state-description.pipe';
import { IsFavoriteDescriptionPipe } from './is-favorite-description.pipe';

@NgModule({
  declarations: [
    GenreDescriptionPipe,
    StateDescriptionPipe,
    IsFavoriteDescriptionPipe
  ],
  imports: [],
  exports: [
    GenreDescriptionPipe,
    StateDescriptionPipe,
    IsFavoriteDescriptionPipe
  ],
  providers: [],
})
export class PipesModule { }