import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import { Signup } from '../../models/signup.model';
import { Route } from '../constants/route.enum';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupmodel : Signup= {
      name: '',
      surname:  '',
      email: '',
      username: '',
      password: ''
  };
   errorMessage: string = '';


  constructor(private router: Router, private signupService: SignupService) {}

  ngOnInit() {
    // You can move the code here or create a new method and call it from here
    this.signup();
  }

  signup() {
    this.signupService
      .createSignup(this.signupmodel)
      .subscribe(
        (user: Signup) => {
          this.router.navigate([Route.EMPTY]);
        },
        (error: string) => {
          this.errorMessage = error;
        }
      );
  }
}

