import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './../auth.service';
import { AppUser } from '../Models/app-user';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  appUser: AppUser;


  constructor(private auth: AuthService ) { 
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  Logout() {
    this.auth.Logout();
  }

}
