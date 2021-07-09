import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { OutletComponent } from './outlet/outlet.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    OutletComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule { }
