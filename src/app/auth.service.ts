import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import { AppUser } from './Models/app-user';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import { observable } from 'rxjs';
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
    return this.user$.switchMap(user => {
      if ( user != null) {
       return this.userService.get(user.uid);
      }
      return new Observable();
    });
  }}
