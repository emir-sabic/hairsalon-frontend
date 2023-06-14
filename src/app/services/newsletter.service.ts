import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Newsletter} from '../models/newsletter.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private readonly baseUrl: string = `${environment.backendUrl}/api/newsletter`;

  constructor(private http: HttpClient) {
  }

  createNewsletter(news: Newsletter): Observable<Newsletter>{
    return this.http.post<Newsletter>(`${this.baseUrl}/new`, news);
  }

  getNewsLetters(newsid: number): Observable<Newsletter[]> {
    return this.http.get<Newsletter[]>(`${this.baseUrl}`);
  }

//   getNewsLetter(newsid: number): Observable<Newsletter> {
//     return this.http.get<Newsletter>(`${this.baseUrl}/${newsid}`);
//   }
}
