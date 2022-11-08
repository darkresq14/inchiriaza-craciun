import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) {
    this.rentals$ = rentalFsS.getAll().valueChanges({ idField: 'id' });
  }

  ngOnInit(): void {}

  getImageUrl(rental: Rental) {
    return `../../../assets/images/${rental.type}/${rental.image}.jpg`;
  }

  onRentClicked(rental: Rental) {
    this.rentalFsS.setRental(rental);
    this.router.navigate(['/contact']);
  }
}
