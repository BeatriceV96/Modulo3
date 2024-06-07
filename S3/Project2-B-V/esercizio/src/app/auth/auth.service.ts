import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { iUser } from '../models/i-user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private authStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        this.authStatus.next(true);
      })
    );
  }

  register(data: iUser): Observable<iUser> {
    return this.http.post<iUser>(`${this.apiUrl}/auth/register`, data);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authStatus.next(false);
  }

  isAuthenticated(): Observable<boolean> {
    return this.authStatus.asObservable();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
