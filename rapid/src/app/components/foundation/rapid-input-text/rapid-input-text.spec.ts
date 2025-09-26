import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidInputText } from './rapid-input-text';

describe('RapidInputText', () => {
  let component: RapidInputText;
  let fixture: ComponentFixture<RapidInputText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapidInputText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidInputText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
