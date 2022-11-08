import { TestBed } from '@angular/core/testing';

import { RentalFirestoreService } from './rental-firestore.service';

describe('RentFirestoreService', () => {
  let service: RentalFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
