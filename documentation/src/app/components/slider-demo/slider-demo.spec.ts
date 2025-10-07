import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDemo } from './slider-demo';

describe('SliderDemo', () => {
  let component: SliderDemo;
  let fixture: ComponentFixture<SliderDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
