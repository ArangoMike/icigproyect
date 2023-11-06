import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserM } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http:HttpClient) { }

  private url: string = 'http://localhost:8080/usuarios';

  saveUser(user: UserM):Observable<UserM>{
    let direction = this.url;
    return this.http.post<UserM>(direction,user,{
      responseType: 'text' as 'json',
    });
  }

  getUsers():Observable<UserM[]>{
    let direction = this.url;
    return this.http.get<UserM[]>(direction);
  }

}