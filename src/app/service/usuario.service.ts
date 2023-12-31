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

  getUser(id: any):Observable<UserM>{
    let direction = this.url + '/' + id;
    return this.http.get<UserM>(direction);
  }

  deleteUser(idUser: number) {
    let direction = this.url + '/' + idUser;
    return this.http.delete<any>(direction);
  }

  updateUser(id: any, usuario: UserM):Observable<any>{
    let direction = this.url +'/'+ id;
    return this.http.put<any>(direction,usuario);
  }

  loginUser(user: any):Observable<boolean>{
    let direction = this.url + '/login';
    return this.http.post<boolean>(direction,user);
  }

}