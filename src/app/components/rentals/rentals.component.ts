import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { RentalFirestoreService } from 'src/app/services/rental-firestore.service';
import { Rental } from 'src/app/shared/rental.model';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css'],
})
export class RentalsComponent implements OnInit {
  rentals$: Observable<Rental[]>;

  constructor(
    private rentalFsS: RentalFirestoreService,
    private db: AngularFirestore
  ) {
    this.rentals$ = rentalFsS.getAll().valueChanges();
    this.rentals$.subscribe((data) => console.log(data));
  }

  ngOnInit(): void {}

  getImageUrl(rental: Rental) {
    return `../../../assets/images/${rental.type}/${rental.image}.jpg`;
  }

  onRentClicked(rental: Rental) {}
}
