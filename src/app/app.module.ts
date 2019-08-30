import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ShiftsComponent } from './shifts/shifts.component';
import { ShiftListComponent } from './shift-list/shift-list.component';
import { ShiftsService } from './shared/shifts.service';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ShiftsComponent,
    ShiftListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [ShiftsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
