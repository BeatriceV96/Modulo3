import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FormsModule } from '@angular/forms';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';


@NgModule({
  declarations: [
    MovieListComponent,
    FavoriteMoviesComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule
  ],
  exports: [
    FavoriteMoviesComponent,
    MovieListComponent
  ]
})
export class MoviesModule { }
