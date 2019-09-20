import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

  async submit() {
    this.form.disable();
    await this.authService.signUp(this.form.value.name, this.form.value.password);
    this.form.reset();
    this.form.enable();
  }

  isInvalid(value) {
    return this.form.controls[value].invalid
      && (this.form.controls[value].dirty || this.form.controls[value].touched);
  }
}
