import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import User from '../models/user.model';

@Injectable()
export class HomeService {

  resourceUrl = "http://localhost:3000/users/"

  constructor(private http: HttpClient) { }

  buscar(): Observable<User[]>{
    return this.http.get<User[]>(this.resourceUrl);
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>(this.resourceUrl, user);
  }

  editar(user: User): Observable<User>{
    return this.http.put<User>(this.resourceUrl + user.id, user);
  }

  deletar(id: number){
    return this.http.delete(this.resourceUrl + id);
  }

}
