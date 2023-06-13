import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from "../../services/login.service";
import {Login} from "../../models/Login.model";
import {Route} from "../constants/route.enum";

@Component({
  selector: 'app-loginsingup',
  templateUrl: './loginsingup.component.html',
  styleUrls: ['./loginsingup.component.css']
})
export class LoginsingupComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router:Router, private loginService: LoginService) {
  }

    ngOnInit() {
      // You can move the code here or create a new method and call it from here
      this.login();
    }

  login() {
    this.loginService.getUser(this.username, this.password)
      .subscribe(
        (result: Login | string) => {
          if (typeof result === 'string') {
            this.errorMessage = result;
          } else {
            this.router.navigate([Route.HOME]);
          }
        },

      );
  }
}
