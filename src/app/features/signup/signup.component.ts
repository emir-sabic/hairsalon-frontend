import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import { Signup } from '../../models/signup.model';
import { Route } from '../constants/route.enum';
import jwtDecode, {JwtPayload} from 'jwt-decode';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

      firstname: string = "";
      lastname:   string = "";
      email:  string = "";
      username:  string = "";
      password:  string = "";
      role: string = "MANAGER";

   errorMessage: string = "";


  constructor(private router: Router, private authService: AuthService) {}

public signup(): void {
        sessionStorage.removeItem("app.token");
        this.authService.signup(this.firstname, this.lastname, this.email, this.username, this.password, this.role)
            .subscribe({
                next: (response) => {
                console.log(response);
                    sessionStorage.setItem("app.token", response.access_token);

                    const decodedToken = jwtDecode<JwtPayload>(response.access_token);
                    // @ts-ignore
                    sessionStorage.setItem("app.roles",  decodedToken.scope);

                    this.router.navigateByUrl("/homepage");
                },
                error: (error) => console.log(error)
            });
    }
}

