import { Injectable } from '@angular/core';
import {ShiftPage} from '../state/shift-page';
import {StoreService} from '../../service/store.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftPageStore extends StoreService<ShiftPage> {
  protected store: string = 'shift-page';

  constructor() {
    super({
      loading: true,
      shifts: [],
    });
  }
}
