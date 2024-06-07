import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { iMovie } from '../models/i-movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private apiUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<iMovie[]> {
    return this.http.get<{ movies: iMovie[] }>(this.apiUrl).pipe(
      map(response => response.movies)
    );
  }
}
