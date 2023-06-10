import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ModelSignup} from '../models/modelsignup.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environments';


@Injectable()
export class ModelSignupService {

  private readonly baseUrl: string = `${environment.backendUrl}/modelsignup`;

  constructor(private http: HttpClient) {
  }

  createModelSignup(model: ModelSignup): Observable<ModelSignup> {
      return this.http.post<ModelSignup>(`${this.baseUrl}/modelsignup`, {model});
  }

}
