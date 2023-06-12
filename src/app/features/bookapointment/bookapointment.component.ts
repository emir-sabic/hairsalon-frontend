import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/bookappointment.service';
import { BookAppointment } from '../../models/bookappointment.model';

@Component({
  selector: 'app-bookapointment',
  templateUrl: './bookapointment.component.html',
  styleUrls: ['./bookapointment.component.css']
})
export class BookapointmentComponent implements OnInit {
  bookappointmentmodel: BookAppointment = {
    name: '',
    email: '',
    date: '',
    time: '',
    stylist: '',
    service: ''
  };

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.initializeModel();
  }

  initializeModel(): void {
    this.bookappointmentmodel.name = (<HTMLInputElement>document.getElementById('name')).value;
    this.bookappointmentmodel.email = (<HTMLInputElement>document.getElementById('email')).value;
    this.bookappointmentmodel.date = (<HTMLInputElement>document.getElementById('date')).value;
    this.bookappointmentmodel.time = (<HTMLInputElement>document.getElementById('time')).value;
    this.bookappointmentmodel.stylist = (<HTMLInputElement>document.getElementById('stylist')).value;
    this.bookappointmentmodel.service = (<HTMLInputElement>document.getElementById('services')).value;
  }

  bookNow() {
    this.appointmentService.createAppointment(this.bookappointmentmodel);
  }
}
