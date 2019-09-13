import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShiftPageComponent} from './components/shift-page/shift-page.component';


const routes: Routes = [
  {path: 'shifts', component: ShiftPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftsRoutingModule { }
