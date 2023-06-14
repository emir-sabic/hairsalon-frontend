import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BookAppointment} from '../models/bookappointment.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environments';
import {Service} from '../models/service.model';
import {Stylist} from '../models/stylist.model';



@Injectable()
export class AppointmentService {

  private readonly baseUrl: string = `${environment.backendUrl}/api/appointment`;

  constructor(private http: HttpClient) {
  }

  getAppointments(appointmentid?: number): Observable<BookAppointment[]> {
    return this.http.get<BookAppointment[]>(`${this.baseUrl}`);
  }

//   getAppointment(appointmentid: number): Observable<BookAppointment> {
//     return this.http.get<BookAppointment>(`${this.baseUrl}/${appointmentid}`);
//   }

  createAppointment(appointment: BookAppointment) : Observable<BookAppointment>{
    console.log('Sending appointment data to backend:', appointment);
    return this.http.post<BookAppointment>(`${this.baseUrl}/new`, appointment);
  }


  deleteAppointment(appointmentid: number): Observable<null> {
    this.http.delete(`${this.baseUrl}/delete/${appointmentid}`);
    return of(null);
  }

  getServices(serviceid?: number): Observable<Service[]> {
    return this.http.get<Service[]>(`${environment.backendUrl}/api/servis`);
  }

  getStylists(stylistid?: number): Observable<Stylist[]> {
    return this.http.get<Stylist[]>(`${environment.backendUrl}/api/stylist`);
  }

  createStylist(stylist: Stylist) : Observable<Stylist>{
    console.log('Sending appointment data to backend:', stylist);
    return this.http.post<Stylist>(`${environment.backendUrl}/api/stylist/new`, stylist);
  }
  creaetService(service: Service) : Observable<Service>{
    console.log('Sending appointment data to backend:', service);
    return this.http.post<Service>(`${environment.backendUrl}/api/servis/new`, service);
  }

  deleteStylist(stylistid: number): Observable<null> {
    this.http.delete(`${environment.backendUrl}/api/stylist/delete/${stylistid}`);
    return of(null);
  }
  deleteService(serviceid: number): Observable<null> {
    this.http.delete(`${environment.backendUrl}/api/servis/delete/${serviceid}`);
    return of(null);
  }
}
