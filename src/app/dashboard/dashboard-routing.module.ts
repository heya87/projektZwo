import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {dashboardRoutesNames} from './dashboard.route.names';
import {AuthGuard} from '../authentication/guard/auth.guard';


const routes: Routes = [
  {path: dashboardRoutesNames.BASE, component: DashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
