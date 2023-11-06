import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from '../models/grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(
    private http: HttpClient) { }

  private url: string = 'http://localhost:8080/grupos';

  saveUser(user: Grupo): Observable<Grupo> {
    let direction = this.url;
    return this.http.post<Grupo>(direction, user, {
      responseType: 'text' as 'json',
    });
  }

  getGrupos(): Observable<Grupo[]> {
    let direction = this.url;
    return this.http.get<Grupo[]>(direction);
  }

  deleteGrupo(idGrupo: number) {
    let direction = this.url + '/' + idGrupo;
    return this.http.delete<any>(direction);
  }
}
