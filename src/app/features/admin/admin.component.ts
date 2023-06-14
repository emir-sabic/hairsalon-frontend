import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service.model';
import { Stylist } from '../../models/stylist.model';
import { BookAppointment } from '../../models/bookappointment.model'
import { ModelSignup } from '../../models/modelsignup.model'
import { AppointmentService } from '../../services/bookappointment.service';
import { ModelSignupService } from '../../services/modelsignup.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  stylists: Stylist[]= [];
  services: Service[]= [];
  appointments: BookAppointment[] = [];
  models: ModelSignup[] = [];
  newStylistName: string = '';
  showStylistInput: boolean = false;
  newServiceName: string = '';
  showServiceInput: boolean = false;


  constructor(private appointmentService: AppointmentService, private modelsignupService: ModelSignupService) {}

  ngOnInit() {
      this.fetchService();
      this.fetchStylist();
      this.fetchAppointment();
      this.fetchModels();
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

  fetchAppointment() {
    this.appointmentService.getAppointments().subscribe(
      (data) => {
        this.appointments = data;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  fetchModels() {
    this.modelsignupService.getModelSignup().subscribe(
      (data) => {
        this.models = data;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  deleteAppointment(index: number): void {
      console.log(index);
      this.appointmentService.deleteAppointment(index).subscribe(
        () => {
          this.appointments.splice(index, 1);
          console.log('Model deleted successfully.');
        },
        (error) => {
          console.error('Failed to delete model:', error);
        }
      );
  }

  deleteModel(idx: number): void {
      this.modelsignupService.deleteModel(idx).subscribe(
        () => {
          this.models.splice(idx, 1);
          console.log('Model deleted successfully.');
        },
        (error) => {
          console.error('Failed to delete model:', error);
        }
      );
    }

  openStylistInput(): void {
    this.showStylistInput = true;
  }

  addStylist(): void {
      if (this.newStylistName.trim() === '') {
        console.warn('Stylist name is empty');
        return;
  }

  const stylist: Stylist = { name: this.newStylistName};
  this.appointmentService.createStylist(stylist).subscribe(
    (response) => {
      // On success, add the new stylist to the local array
      this.stylists.push(response);
      this.newStylistName = ''; // Reset the input field
      this.showStylistInput = false; // Hide the input field
      console.log('Stylist added successfully.');
    },
    (error) => {
      console.error('Failed to add stylist:', error);
    }
  );
  }

  openServiceInput(): void {
    this.showServiceInput = true;
  }

  addService(): void {
      if (this.newServiceName.trim() === '') {
        console.warn('Stylist name is empty');
        return;
      }

  const service: Service = { name: this.newServiceName};
  this.appointmentService.creaetService(service).subscribe(
    (response) => {
      // On success, add the new stylist to the local array
      this.services.push(response);
      this.newServiceName = ''; // Reset the input field
      this.showServiceInput = false; // Hide the input field
      console.log('Stylist added successfully.');
    },
    (error) => {
      console.error('Failed to add stylist:', error);
    }
  );
  }


  deleteService(inde: number): void {
    this.appointmentService.deleteService(inde).subscribe(
      () => {
        this.services.splice(inde, 1);
        console.log('Model deleted successfully.');
      },
      (error) => {
        console.error('Failed to delete model:', error);
      }
    );
  }
  deleteStylist(ide: number): void {
    this.appointmentService.deleteStylist(ide).subscribe(
      () => {
        this.stylists.splice(ide, 1);
        console.log('Model deleted successfully.');
      },
      (error) => {
        console.error('Failed to delete model:', error);
      }
    );
  }
}
