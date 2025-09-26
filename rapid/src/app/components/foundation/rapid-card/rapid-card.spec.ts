import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidCard } from './rapid-card';

describe('RapidCard', () => {
  let component: RapidCard;
  let fixture: ComponentFixture<RapidCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapidCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
