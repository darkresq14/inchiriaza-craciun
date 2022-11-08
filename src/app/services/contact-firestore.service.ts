import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Contact } from '../shared/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactFirestoreService {
  private dbPath = '/contacts';

  contactsRef: AngularFirestoreCollection<Contact>;

  constructor(private db: AngularFirestore) {
    this.contactsRef = db.collection(this.dbPath);
  }

  create(contact: Contact): any {
    return this.contactsRef.add({ ...contact });
  }
}
