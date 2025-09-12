import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fluid } from './fluid';

describe('Fluid', () => {
  let component: Fluid;
  let fixture: ComponentFixture<Fluid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fluid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fluid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
