import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reunion } from '../models/reunion';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {

  constructor(
    private http:HttpClient) { }

  private url: string = 'http://localhost:8080/reuniones';

  saveReunion(reunion: Reunion):Observable<Reunion>{
    let direction = this.url;
    return this.http.post<Reunion>(direction,reunion,{
      responseType: 'text' as 'json',
    });
  }

  getReuniones():Observable<Reunion[]>{
    let direction = this.url;
    return this.http.get<Reunion[]>(direction);
  }
}
