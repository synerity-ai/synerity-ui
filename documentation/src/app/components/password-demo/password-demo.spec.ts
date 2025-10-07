import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordDemo } from './password-demo';

describe('PasswordDemo', () => {
  let component: PasswordDemo;
  let fixture: ComponentFixture<PasswordDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
