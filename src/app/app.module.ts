import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
//import { environment } from '../environments/environment';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { ManageOrderComponent } from './admin/manage-order/manage-order.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { AuthGuard } from './auth-guard.service';
import { CheckOutComponent } from './check-out/check-out.component';
import {UserService} from './user.service';
import {AdminCheckService} from './admin-check.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BsNavbarComponent,
    HomeComponent,
    MyOrderComponent,
    ManageOrderComponent,
    ManageProductsComponent,
    CheckOutComponent,
    ProductFormComponent
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
      {path: 'my/order' , component: MyOrderComponent, canActivate: [AuthGuard] },
      {path: 'admin/order' , component: ManageOrderComponent, canActivate: [AuthGuard, AdminCheckService]  },
      {path: 'admin/Product' , component: ManageProductsComponent, canActivate: [AuthGuard, AdminCheckService]  },
      {path: 'check-out' , component: CheckOutComponent, canActivate: [AuthGuard] },
      {path: 'admin/Product/new' , component: ProductFormComponent, canActivate: [AuthGuard, AdminCheckService]  },
    ])
  ],
  providers: [AuthService, AuthGuard, UserService, AdminCheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
