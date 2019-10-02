import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ReactiveFormsModule } from "@angular/forms";
import {ShiftsModule} from './shifts/shifts.module';
import {CoreModule} from './core/core.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {AuthenticationModule} from './authentication/authentication.module';
import {AuthService} from './authentication/service/auth.service';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    ShiftsModule,
    DashboardModule,
    AuthenticationModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
