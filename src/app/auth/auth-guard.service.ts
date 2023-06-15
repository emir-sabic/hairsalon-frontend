import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("adad");
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigateByUrl("/login");
            return false;
        }
    }
}
// && this.authService.isUserInRole(next.routeConfig?.data?.['role'])
