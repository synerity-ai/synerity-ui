import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtonDemo } from './toggle-button-demo';

describe('ToggleButtonDemo', () => {
  let component: ToggleButtonDemo;
  let fixture: ComponentFixture<ToggleButtonDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleButtonDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleButtonDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
