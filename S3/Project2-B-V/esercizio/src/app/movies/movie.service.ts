import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iMovie } from '../models/i-movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<iMovie[]> {
    return this.http.get<iMovie[]>(this.apiUrl);
  }
}
