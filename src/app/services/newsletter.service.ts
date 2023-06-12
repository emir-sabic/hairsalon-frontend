import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Newsletter} from '../models/newsletter.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private readonly baseUrl: string = `${environment.backendUrl}/newsletter`;

  constructor(private http: HttpClient) {
  }

  createNewsletter(news: Newsletter) {
    this.http.post<Newsletter>(`${this.baseUrl}/newsletter`, {news});
  }
}
