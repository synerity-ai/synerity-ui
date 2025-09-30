import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuRadioDemo } from './su-radio-demo';

describe('SuRadioDemo', () => {
  let component: SuRadioDemo;
  let fixture: ComponentFixture<SuRadioDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuRadioDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuRadioDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
