import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSwitchDemo } from './toggle-switch-demo';

describe('ToggleSwitchDemo', () => {
  let component: ToggleSwitchDemo;
  let fixture: ComponentFixture<ToggleSwitchDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleSwitchDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleSwitchDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
