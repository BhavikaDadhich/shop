import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import { AppUser } from './Models/app-user';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private userService: UserService) {
    this.user$ = afAuth.authState;
   }
  login()
  {
    let returnUrl = (this.route.snapshot.queryParamMap.get('returnUrl')) || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  Logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable <AppUser> {
    return this.user$.switchMap(user => this.userService.get('1y5aSaIu1rZjrsTND6PzmrFQV6f2'));
    
  }
 
}
