import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import jwtDecode, {JwtPayload} from 'jwt-decode';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    username: string = "";
    password: string = "";
    message: string = "";

    constructor(private authService: AuthService, private router: Router) {
    }

public login(): void {
        sessionStorage.removeItem("app.token");

        this.authService.login(this.username, this.password)
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
