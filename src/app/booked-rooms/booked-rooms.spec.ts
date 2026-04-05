import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedRooms } from './booked-rooms';

describe('BookedRooms', () => {
  let component: BookedRooms;
  let fixture: ComponentFixture<BookedRooms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookedRooms],
    }).compileComponents();

    fixture = TestBed.createComponent(BookedRooms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
