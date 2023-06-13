import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Signup} from '../models/signup.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environments';


@Injectable()
export class SignupService {

  private readonly baseUrl: string = `${environment.backendUrl}/signup`;

  constructor(private http: HttpClient) {
  }

  createSignup(user: Signup): Observable<Signup> {
      return this.http.post<Signup>(`${this.baseUrl}/signup`, {user});
  }


}
