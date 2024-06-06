import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private userSubject = new BehaviorSubject(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: any) {
    return this.http.post('http://localhost:3000/login', credentials).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      this.userSubject.next(response.user);
      this.router.navigate(['/movies']);
    });
  }

  register(user: any) {
    return this.http.post('http://localhost:3000/register', user);
  }

  logout() {
    localStorage.removeItem('token');
    this.userSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
