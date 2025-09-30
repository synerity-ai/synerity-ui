import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuInputTextDemo } from './su-input-text-demo';

describe('SuInputTextDemo', () => {
  let component: SuInputTextDemo;
  let fixture: ComponentFixture<SuInputTextDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuInputTextDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuInputTextDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
