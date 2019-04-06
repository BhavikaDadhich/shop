import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { ManageOrderComponent } from './admin/manage-order/manage-order.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { AuthGuardService } from './auth-guard.service';
import { CheckOutComponent } from './check-out/check-out.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BsNavbarComponent,
    HomeComponent,
    MyOrderComponent,
    ManageOrderComponent,
    ManageProductsComponent,
    CheckOutComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,

    RouterModule.forRoot([
      {path : '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'my/order' , component: MyOrderComponent, canActivate: [AuthGuardService] },
      {path: 'admin/order' , component: ManageOrderComponent, canActivate: [AuthGuardService]  },
      {path: 'admin/Product' , component: ManageProductsComponent, canActivate: [AuthGuardService]  },
      {path: 'check-out' , component: CheckOutComponent, canActivate: [AuthGuardService] }
    ])
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
