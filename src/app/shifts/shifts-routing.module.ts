import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShiftPageComponent} from './components/shift-page/shift-page.component';
import {shiftRoutesNames} from './shift.route.names';
import {SecureInnerPagesGuard} from '../authentication/guard/secure-inner-pages.guard';
import {AuthGuard} from '../authentication/guard/auth.guard';


const routes: Routes = [
  {path: shiftRoutesNames.BASE, component: ShiftPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftsRoutingModule { }
