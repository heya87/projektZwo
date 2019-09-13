import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import {ShiftFirestore} from './shift.firestore';
import {ShiftPageStore} from './shift-page.store';
import {Shift} from '../../models/shift';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  constructor(
    private firestore: ShiftFirestore,
    private store: ShiftPageStore
  ) {
    this.firestore.collection$().pipe(
      tap(shifts => {
        this.store.patch({
          loading: false,
          shifts,
        }, `shifts collection subscription`);
      })
    ).subscribe();
  }

  get shifts$(): Observable<Shift[]> {
    return this.store.state$.pipe(map(state => state.loading
      ? []
      : state.shifts));
  }

  get loading$(): Observable<boolean> {
    return this.store.state$.pipe(map(state => state.loading));
  }

  get noResults$(): Observable<boolean> {
    return this.store.state$.pipe(
      map(state => {
        return !state.loading
          && state.shifts
          && state.shifts.length === 0;
      })
    );
  }

  get formStatus$(): Observable<string> {
    return this.store.state$.pipe(map(state => state.formStatus));
  }

  create(shift: Shift) {
    this.store.patch({
      loading: true,
      shifts: [],
      formStatus: 'Saving...'
    }, "shift create")
    return this.firestore.create(shift).then(_ => {
      this.store.patch({
        formStatus: 'Saved!'
      }, "shift create SUCCESS")
      setTimeout(() => this.store.patch({
        formStatus: ''
      }, "shift create timeout reset formStatus"), 2000)
    }).catch(err => {
      this.store.patch({
        loading: false,
        formStatus: 'An error ocurred'
      }, "shift create ERROR")
    })
  }

  delete(id: string): any {
    this.store.patch({ loading: true, shifts: [] }, "shift delete")
    return this.firestore.delete(id).catch(err => {
      this.store.patch({
        loading: false,
        formStatus: 'An error ocurred'
      }, "shift delete ERROR")
    })
  }
}
