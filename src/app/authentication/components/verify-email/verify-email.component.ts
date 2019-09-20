import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {authRoutesNames} from '../../auth.route.names';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit() {
  }

  sendVerificationMail() {
    this.authService.sendVerificationMail().then(r => {
        window.alert('Email successfully sent!');
    });
  }

  navigateToLogin() {
   this.router.navigate([authRoutesNames.SIGNIN]);
  }
}
