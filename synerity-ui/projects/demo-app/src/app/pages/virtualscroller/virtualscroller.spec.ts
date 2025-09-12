import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Virtualscroller } from './virtualscroller';

describe('Virtualscroller', () => {
  let component: Virtualscroller;
  let fixture: ComponentFixture<Virtualscroller>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Virtualscroller]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Virtualscroller);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
