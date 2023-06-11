import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BookAppointment} from '../models/bookappointment.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environments';



@Injectable()
export class AppointmentService {

  private readonly baseUrl: string = `${environment.backendUrl}/bookappointment`;

  constructor(private http: HttpClient) {
  }

  getAppointments(appointmentid: number): Observable<BookAppointment[]> {
    return this.http.get<BookAppointment[]>(`${this.baseUrl}/${appointmentid}/list`);
  }

  getAppointment(appointmentid: number): Observable<BookAppointment> {
    return this.http.get<BookAppointment>(`${this.baseUrl}/${appointmentid}`);
  }

  createAppointment(appointment: BookAppointment): Observable<BookAppointment> {
  console.log('Sending appointment data too backend:', appointment);
      return this.http.post<BookAppointment>(`${this.baseUrl}/bookapointment`, appointment);
  }

  deleteAppointment(appointmentid: number): Observable<null> {
    this.http.delete(`${this.baseUrl}/${appointmentid}`);
    return of(null);
  }
}
