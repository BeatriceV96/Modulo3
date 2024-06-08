import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { iMovie } from '../../models/i-movie';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './/movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})


export class MovieListComponent implements OnInit {
  movies: iMovie[] = [];

  constructor(private movieService: MovieService, private router: Router, private authService: AuthService) {}

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
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/auth/login']);
      return;
    }

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
