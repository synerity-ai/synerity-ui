import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidColorPicker } from './rapid-color-picker';

describe('RapidColorPicker', () => {
  let component: RapidColorPicker;
  let fixture: ComponentFixture<RapidColorPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapidColorPicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidColorPicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
