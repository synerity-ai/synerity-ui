import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidAutocomplete } from './rapid-autocomplete';

describe('RapidAutocomplete', () => {
  let component: RapidAutocomplete;
  let fixture: ComponentFixture<RapidAutocomplete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapidAutocomplete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidAutocomplete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
