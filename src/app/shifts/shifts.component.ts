import { Component, OnInit } from '@angular/core';
import { ShiftsService } from '../shared/shifts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {

  constructor(private shiftsService: ShiftsService) { }

  ngOnInit() {
  }

  form = new FormGroup({
    worker: new FormControl('testWorker', Validators.minLength(2)),
    task: new FormControl('testTask', Validators.minLength(2)),
    location: new FormControl('testLocation', Validators.minLength(2)),
    date: new FormControl('testDate', Validators.minLength(2)),
    start: new FormControl('testStart', Validators.minLength(2)),
    end: new FormControl('testEnd', Validators.minLength(2)),
  });

  onAdd() {
     this.shiftsService.createShift(this.form.value)
         .then(res => {
             /*do something here....
             maybe clear the form or give a success message*/
         });
  }
}
