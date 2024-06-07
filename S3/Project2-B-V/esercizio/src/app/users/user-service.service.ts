import { Injectable } from '@angular/core';
import { iUser } from '../models/i-user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<iUser[]> {
    return this.http.get<iUser[]>(this.apiUrl);
  }

  getUserById(userId: number): Observable<iUser> {
    return this.http.get<iUser>(`${this.apiUrl}/${userId}`);
  }
}
