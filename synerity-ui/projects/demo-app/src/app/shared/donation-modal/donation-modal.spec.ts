import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationModal } from './donation-modal';

describe('DonationModal', () => {
  let component: DonationModal;
  let fixture: ComponentFixture<DonationModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
