import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuCheckboxDemo } from './su-checkbox-demo';

describe('SuCheckboxDemo', () => {
  let component: SuCheckboxDemo;
  let fixture: ComponentFixture<SuCheckboxDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuCheckboxDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuCheckboxDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
