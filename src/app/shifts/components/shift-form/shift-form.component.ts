import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ShiftsService} from '../../service/shifts.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-shift-form',
  templateUrl: './shift-form.component.html',
  styleUrls: ['./shift-form.component.css']
})
export class ShiftFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
    noOfWorker: new FormControl('', Validators.required),
  });
  private status$: Observable<string>;

  constructor(private shiftService: ShiftsService) { }

  ngOnInit() {
    this.status$ = this.shiftService.formStatus$;
  }

  isInvalid(value) {
    return this.form.controls[value].invalid
      && (this.form.controls[value].dirty || this.form.controls[value].touched);
  }

  async submit() {
    this.form.disable();
    await this.shiftService.create({ ...this.form.value
    });
    this.form.reset();
    this.form.enable();
  }
}
