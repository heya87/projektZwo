import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Shift} from '../../../models/shift';
import {ShiftsService} from '../../service/shifts.service';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.css']
})
export class ShiftListComponent implements OnInit {
  loading$: Observable<boolean>;
  shifts$: Observable<Shift[]>;
  noResults$: Observable<boolean>;

  constructor(private shiftService: ShiftsService) {}

  ngOnInit() {
    this.loading$ = this.shiftService.loading$;
    this.noResults$ = this.shiftService.noResults$;
    this.shifts$ = this.shiftService.shifts$;
  }

  delete(shift: Shift) {
    this.shiftService.delete(shift.id);
  }
}
