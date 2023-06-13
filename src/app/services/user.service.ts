import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Login} from "../models/Login.model";
import {environment} from "../../environments/environments";

@Injectable()
export class UserService {
  private baseUrl = `${environment.backendUrl}/api/user`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Login[]> {
    return this.http.get<Login[]>(`${this.baseUrl}/list`);
  }

  getUser(userId: number): Observable<Login> {
    return this.http.get<Login>(`${this.baseUrl}/${userId}`);
  }

  createUser(user: Login): Observable<Login> {
    return this.http.post<Login>(this.baseUrl, user);
  }



}
