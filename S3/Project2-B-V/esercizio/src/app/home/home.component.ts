import { Component, OnInit } from '@angular/core';
import { iMovie } from '../models/i-movie';
import { MovieService } from '../movies/movie.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  movies: iMovie[] = [];

  constructor(
    private movieService: MovieService,
    private authService: AuthService,
    private router: Router
  ) {}

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

  handleFavoriteClick(movie: iMovie): void {
    if (this.authService.isAuthenticated()) {
      this.toggleFavorite(movie);
    } else {
      this.router.navigate(['/auth/login']);
    }
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
