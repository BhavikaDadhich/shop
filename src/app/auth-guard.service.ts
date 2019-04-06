import { Injectable } from '@angular/core';
import {CanActivate, Router , CanActivateChild} from '@angular/router/';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


import 'rxjs/add/operator/map';
 // import { map } from 'rxjs/add/operator';
import 'rxjs/add/operator/take';
import { map } from 'rxjs/operators';
@Injectable(
)
export class AuthGuard  implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(route, state: RouterStateSnapshot) {

    return this.auth.user$.map(user => {
      if (user) {
        return true;
         } else {
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
      }
      });
  }
}
