import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuSliderDemo } from './su-slider-demo';

describe('SuSliderDemo', () => {
  let component: SuSliderDemo;
  let fixture: ComponentFixture<SuSliderDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuSliderDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuSliderDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
