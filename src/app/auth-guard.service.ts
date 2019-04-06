import { Injectable } from '@angular/core';
import {CanActivate, Router , CanActivateChild} from '@angular/router/';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';
//import { map } from 'rxjs/add/operator';
import 'rxjs/add/operator/take';
import { map } from 'rxjs/operators';
@Injectable(
)
export class AuthGuardService  implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate() {

    return this.auth.user$.map(user => {
      if (user) {
        return true;
         } else {
        this.router.navigate(['/login']);
        return false;
      }
      });
  }

}
