import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Appointment} from '../models/bookappointment.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class AppointmentService {

  private readonly baseUrl: string = `${environment.backendUrl}/appointment`;

  constructor(private http: HttpClient) {
  }

  getAppointment(appointmentid: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}/${appointmentId}/list`);
  }

  getAppointment(appointmentId: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.baseUrl}/${appointmentid}`);
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.baseUrl}`, appointment);
  }
  deleteAppointment(appointmentid: number): Observable<null> {
    this.http.delete(`${this.baseUrl}/${appointmentid}`);
    return of(null);
  }
}
