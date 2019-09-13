import { Injectable } from '@angular/core';
import {Shift} from '../../models/shift';
import {FirestoreService} from '../../service/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftFirestore extends FirestoreService<Shift> {

  protected basePath: string = 'shifts';

}
