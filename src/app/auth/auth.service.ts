import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    isLoggedIn(): boolean {
    console.log(sessionStorage.getItem("app.token"));
        return sessionStorage.getItem("app.token") != null;

    }


login(email: string, password: string): Observable<any> {
       const body = {
          email: '',
          password: ''
        }
        if(email && password){
            sessionStorage.setItem("app.username", email);
            body.email = email;
            body.password = password;
        }
        return this.http.post("http://localhost:8080/api/v1/auth/authenticate", body);
    }

    signup(firstname: string, lastname: string, email: string, username:string, password: string, role: string): Observable<any> {
        sessionStorage.setItem("app.username", email)
        const body = {
          firstname : firstname,
          lastname : lastname,
          email: email,
          username: username,
          password: password,
          role: role
        }

        return this.http.post("http://localhost:8080/api/v1/auth/register", body);
    }

    logout() {
        sessionStorage.removeItem("app.token");
        sessionStorage.removeItem("app.roles");
    }

    isUserInRole(roleFromRoute: string) {
        const roles = sessionStorage.getItem("app.roles");

        if (roles!.includes(",")) {
            if (roles === roleFromRoute) {
                return true;
            }
        } else {
            const roleArray = roles!.split(",");
            for (let role of roleArray) {
                if (role === roleFromRoute) {
                    return true;
                }
            }
        }
        return false;
    }
}
