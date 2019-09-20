import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './components/verify-email/verify-email.component';
import {AuthPageComponent} from './components/auth-page/auth-page.component';
import {authRoutesNames} from './auth.route.names';
import {SecureInnerPagesGuard} from './guard/secure-inner-pages.guard';


const routes: Routes = [
  {path: '', redirectTo: authRoutesNames.SIGNIN, pathMatch: 'full'},
  {
    path: authRoutesNames.BASE, component: AuthPageComponent, canActivate: [SecureInnerPagesGuard], children: [
      {path: authRoutesNames.SUB_SIGNIN, component: SignInComponent},
      {path: authRoutesNames.SUB_SIGNUP, component: SignUpComponent},
      {path: authRoutesNames.SUB_RESET_PASSWORD, component: ForgotPasswordComponent},
      {path: authRoutesNames.SUB_VERIFY_EMAIL, component: VerifyEmailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}
