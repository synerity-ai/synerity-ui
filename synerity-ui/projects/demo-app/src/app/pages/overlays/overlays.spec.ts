import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overlays } from './overlays';

describe('Overlays', () => {
  let component: Overlays;
  let fixture: ComponentFixture<Overlays>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overlays]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Overlays);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
