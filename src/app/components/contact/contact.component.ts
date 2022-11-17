import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Rental } from 'src/app/shared/rental.model';
import { RentalFirestoreService } from 'src/app/services/rental-firestore.service';
import { Observable } from 'rxjs';
import { ContactFirestoreService } from 'src/app/services/contact-firestore.service';
import { Contact } from 'src/app/shared/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  selectedRental?: Rental;
  rentals$: Observable<Rental[]>;
  selected = '';

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    rental: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    message: new FormControl(''),
  });

  constructor(
    private rentalFsS: RentalFirestoreService,
    private contactFsS: ContactFirestoreService
  ) {
    this.selectedRental = rentalFsS.getRental();
    this.rentals$ = rentalFsS.getAll().valueChanges({ idField: 'id' });
  }

  ngOnInit(): void {
    if (this.selectedRental) {
      this.contactForm.patchValue({ rental: this.selectedRental?.id });
    }
  }

  onSubmit(form: FormGroupDirective) {
    if (this.contactForm.valid) {
      this.contactFsS.create({
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        rental: this.contactForm.value.rental,
        date: this.contactForm.value.date,
        message: this.contactForm.value.message,
      } as Contact);
      form.resetForm();
    }
  }
}
