import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Rental } from '../shared/rental.model';

@Injectable({
  providedIn: 'root',
})
export class RentalFirestoreService {
  private dbPath = '/rentals';

  rentalsRef: AngularFirestoreCollection<Rental>;

  constructor(private db: AngularFirestore) {
    this.rentalsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Rental> {
    return this.rentalsRef;
  }

  create(rental: Rental): any {
    return this.rentalsRef.add({ ...rental });
  }

  update(id: string, data: any): Promise<void> {
    return this.rentalsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.rentalsRef.doc(id).delete();
  }
}
