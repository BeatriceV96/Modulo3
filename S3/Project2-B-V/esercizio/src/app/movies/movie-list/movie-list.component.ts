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
        this.movies = data;
      },
      error => {
        console.error('Error loading movies', error);
      }
    );
  }

  toggleFavorite(movie: iMovie): void {
    movie.isFavourite = !movie.isFavourite;
    console.log(`${movie.title} is now ${movie.isFavourite ? 'a favorite' : 'not a favorite'}`);
  }
}
