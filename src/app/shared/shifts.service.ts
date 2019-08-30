import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class ShiftsService {
  constructor(private firestore: AngularFirestore) {}

  createShift(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("shifts")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }
}
