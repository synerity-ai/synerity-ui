import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateOnScroll } from './animate-on-scroll';

describe('AnimateOnScroll', () => {
  let component: AnimateOnScroll;
  let fixture: ComponentFixture<AnimateOnScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimateOnScroll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimateOnScroll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
