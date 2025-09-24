import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metergroup } from './metergroup';

describe('Metergroup', () => {
  let component: Metergroup;
  let fixture: ComponentFixture<Metergroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Metergroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Metergroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
