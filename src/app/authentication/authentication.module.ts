import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthPageComponent} from './components/auth-page/auth-page.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './components/verify-email/verify-email.component';


@NgModule({
  declarations: [AuthPageComponent, SignInComponent, SignUpComponent, ForgotPasswordComponent, VerifyEmailComponent ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthenticationModule { }
