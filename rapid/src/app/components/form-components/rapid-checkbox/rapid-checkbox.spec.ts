import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidCheckbox } from './rapid-checkbox';

describe('RapidCheckbox', () => {
  let component: RapidCheckbox;
  let fixture: ComponentFixture<RapidCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapidCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
