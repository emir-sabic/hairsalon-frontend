import { Component, OnInit} from '@angular/core';
import { ModelSignupService } from '../../services/modelsignup.service';
import { ModelSignup } from '../../models/modelsignup.model';

@Component({
  selector: 'app-modelsignup',
  templateUrl: './modelsignup.component.html',
  styleUrls: ['./modelsignup.component.css']
})
export class ModelsignupComponent {

constructor(private modelservice: ModelSignupService) {}

  modelsignupmodel: ModelSignup = {
       fullname: '',
       email: '',
       phonenumber: '',
       age: '',
       prevexp: ''
   };

  signupNow() {
    this.modelsignupmodel.fullname = (<HTMLInputElement>document.getElementById('name')).value;
    this.modelsignupmodel.email= (<HTMLInputElement>document.getElementById('email')).value;
    this.modelsignupmodel.phonenumber = (<HTMLInputElement>document.getElementById('phonenumber')).value;
    this.modelsignupmodel.age = (<HTMLInputElement>document.getElementById('age')).value;
    this.modelsignupmodel.prevexp = (<HTMLTextAreaElement>document.getElementById('message')).value;
    this.modelservice.createModelSignup(this.modelsignupmodel).subscribe();
  }
}
