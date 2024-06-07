import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies/movie.service';
import { iMovie } from '../models/i-movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  movies: iMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

  toggleFavorite(movie: iMovie): void {
    movie.isFavourite = !movie.isFavourite;
    console.log(`${movie.title} is now ${movie.isFavourite ? 'a favorite' : 'not a favorite'}`);
  }
}
