import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { iUser } from '../models/i-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<iUser[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          this.token = 'mock-token';  // In una reale applicazione, otterresti questo dal server.
          localStorage.setItem('token', this.token);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  register(user: iUser): Observable<iUser> {
    return this.http.post<iUser>(this.apiUrl, user).pipe(
      tap(newUser => {
        this.token = 'mock-token';  // In una reale applicazione, otterresti questo dal server.
        localStorage.setItem('token', this.token);
      })
    );
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return this.token !== null || localStorage.getItem('token') !== null;
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('token');
  }
}
