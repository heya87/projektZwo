import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {authRoutesNames} from '../../auth.route.names';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(public router: Router, public authService: AuthService) {
  }

  ngOnInit() {
  }

  async submit() {
    this.form.disable();
    //todo handle login
    this.form.reset();
    this.form.enable();
  }

  isInvalid(value) {
    return this.form.controls[value].invalid
      && (this.form.controls[value].dirty || this.form.controls[value].touched);
  }

  navigateToSignUp() {
    this.router.navigate([authRoutesNames.SIGNUP]);
  }
}
