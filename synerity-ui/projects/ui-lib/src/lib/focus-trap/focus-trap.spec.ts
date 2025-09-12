import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusTrap } from './focus-trap';

describe('FocusTrap', () => {
  let component: FocusTrap;
  let fixture: ComponentFixture<FocusTrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocusTrap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusTrap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
