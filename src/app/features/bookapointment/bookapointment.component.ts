import { Component, OnInit } from '@angular/core';
import { BookAppointment } from '../../models/bookappointment.model';
import { Service } from '../../models/service.model';
import { Stylist } from '../../models/stylist.model';
import { AppointmentService } from '../../services/bookappointment.service';

@Component({
  selector: 'app-bookapointment',
  templateUrl: './bookapointment.component.html',
  styleUrls: ['./bookapointment.component.css']
})
export class BookapointmentComponent {
  bookappointmentmodel: BookAppointment = {
    name: '',
    email: '',
    date: '',
    time: '',
    stylist: '',
    service: ''
  };
  stylists: Stylist[]= [];
  services: Service[]= [];

  constructor(private appointmentService: AppointmentService) {}

  bookNow() {
      this.bookappointmentmodel.name = (<HTMLInputElement>document.getElementById('name')).value;
      this.bookappointmentmodel.email = (<HTMLInputElement>document.getElementById('email')).value;
      this.bookappointmentmodel.date = (<HTMLInputElement>document.getElementById('date')).value;
      this.bookappointmentmodel.time = (<HTMLInputElement>document.getElementById('time')).value;
      this.bookappointmentmodel.stylist = (<HTMLInputElement>document.getElementById('stylist')).value;
      this.bookappointmentmodel.service = (<HTMLInputElement>document.getElementById('services')).value;
    this.appointmentService.createAppointment(this.bookappointmentmodel).subscribe();
  }




  ngOnInit() {
      this.fetchService();
      this.fetchStylist();
    }

  fetchService() {
    this.appointmentService.getServices().subscribe(
      (data) => {
        this.services = data;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

    fetchStylist() {
      this.appointmentService.getStylists().subscribe(
        (data) => {
          this.stylists = data;
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
    }
}









// public stylists: Stylist[] | undefined;
//
//   constructor(
//     private activatedRoute: ActivatedRoute,
//     private bookappointmentserivce: BookAppointmentService
//     private router: Router,
//   ) {}

//   ngOnInit(): void {
//     this.activatedRoute.data.subscribe((response: any) => {
//       this.stylist = response[ResolverResponse.CITIES];
//     });

