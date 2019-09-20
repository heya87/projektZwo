import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShiftPageComponent} from './components/shift-page/shift-page.component';
import {shiftRoutesNames} from './shift.route.names';


const routes: Routes = [
  {path: shiftRoutesNames.BASE, component: ShiftPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftsRoutingModule { }
