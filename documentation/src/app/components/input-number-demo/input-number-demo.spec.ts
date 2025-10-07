import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberDemo } from './input-number-demo';

describe('InputNumberDemo', () => {
  let component: InputNumberDemo;
  let fixture: ComponentFixture<InputNumberDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNumberDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNumberDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
