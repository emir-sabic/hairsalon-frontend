import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ModelSignup} from '../models/modelsignup.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environments';


@Injectable()
export class ModelSignupService {

  private readonly baseUrl: string = `${environment.backendUrl}/api/modelsignup`;

  constructor(private http: HttpClient) {
  }

  createModelSignup(model: ModelSignup): Observable<ModelSignup> {
      return this.http.post<ModelSignup>(`${this.baseUrl}/new`, model);
  }
  getModelSignup(modelsingupid?: number): Observable<ModelSignup[]> {
    return this.http.get<ModelSignup[]>(`${this.baseUrl}`);
  }

  deleteModel(modelid: number): Observable<null> {
    this.http.delete(`${this.baseUrl}/delete/${modelid}`);
    return of(null);
  }

}
