import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { iMovie } from '../../models/i-movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: iMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe(
      (data: iMovie[]) => {
        console.log('Movies loaded:', data);
        this.movies = data;
      },
      error => {
        console.error('Error loading movies', error);
      }
    );
  }

  toggleFavorite(movie: iMovie): void {
    if (movie.isFavourite) {
      this.movieService.removeFavorite(movie.id).subscribe(() => {
        movie.isFavourite = false;
        console.log(`${movie.title} removed from favorites`);
      });
    } else {
      this.movieService.addFavorite(movie).subscribe(() => {
        movie.isFavourite = true;
        console.log(`${movie.title} added to favorites`);
      });
    }
  }
}
