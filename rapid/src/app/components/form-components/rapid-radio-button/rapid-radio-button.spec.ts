import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidRadioButton } from './rapid-radio-button';

describe('RapidRadioButton', () => {
  let component: RapidRadioButton;
  let fixture: ComponentFixture<RapidRadioButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapidRadioButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidRadioButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
