import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatStepperModule } from '@angular/material/stepper';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGaurdService } from './auth-gaurd.service';
import { AdminGaurdService } from './admin-gaurd.service';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  providers: [AuthService, AuthGaurdService, AdminGaurdService],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatStepperModule,
    HttpClientModule
  ]
})
export class AuthModule { }
