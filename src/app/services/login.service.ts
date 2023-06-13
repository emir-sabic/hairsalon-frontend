import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/Login.model';
import {environment} from "../../environments/environments";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  getUser(username: string, password: string): Observable<Login | string> {
    const body = { username, password };
    const url = `${environment.backendUrl}/api/auth/authenticate`;
    return this.http.post<Login>(url, body);

    // return this.http.post<User>('http://localhost:8080/auth/authenticate', body);
  }

}
