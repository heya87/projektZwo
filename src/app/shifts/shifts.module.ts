import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftsRoutingModule } from './shifts-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ShiftPageComponent } from './components/shift-page/shift-page.component';
import { ShiftListComponent } from './components/shift-list/shift-list.component';
import { ShiftFormComponent } from './components/shift-form/shift-form.component';


@NgModule({
  declarations: [ShiftPageComponent, ShiftListComponent, ShiftFormComponent],
  imports: [
    CommonModule,
    ShiftsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ShiftsModule { }
