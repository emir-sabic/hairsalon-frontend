import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from '../../environments/environments';

@Injectable()
export class ReviewService {

  private readonly baseUrl: string = `${environment.backendUrl}/api/reviews`;

  constructor(private http: HttpClient) {
  }

  createReview(review: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/new`, review);
  }

  findAllReviews(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteReview(reviewId: number) {
    return this.http.delete(`http://localhost:8080/api/reviews/delete/${reviewId}`);
  }
}
