import { Component, OnInit } from '@angular/core';
import { iMovie } from '../../models/i-movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrl: './favorite-movies.component.scss'
})
export class FavoriteMoviesComponent implements OnInit {
  favoriteMovies: iMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadFavoriteMovies();
  }

  loadFavoriteMovies(): void {
    this.movieService.getFavoriteMovies().subscribe(
      (data: iMovie[]) => {
        this.favoriteMovies = data;
      },
      error => {
        console.error('Error loading favorite movies', error);
      }
    );
  }

  removeFavorite(movieId: string): void {
    this.movieService.removeFavorite(movieId).subscribe(() => {
      this.favoriteMovies = this.favoriteMovies.filter(movie => movie.id !== movieId);
      console.log('Movie removed from favorites');
    });
  }
}
