import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {authRoutesNames} from '../auth.route.names';
import {AuthService} from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn !== true) {
      this.router.navigate([authRoutesNames.SIGNIN]);
    }
    if (this.authService.isEmailVerified !== true) {
      this.router.navigate([authRoutesNames.VERIFY_EMAIL]);
    }
    return true;
  }

}
