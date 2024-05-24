import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Macchina } from './imacchine';

@Injectable({
  providedIn: 'root'
})
export class MacchineServiceService {

  private jsonUrl = "assets/db.json"
  constructor(private http:HttpClient) {}
  getMacchine():Observable<Macchina[]>{
    return this.http.get<Macchina[]>(this.jsonUrl)
  }
}

