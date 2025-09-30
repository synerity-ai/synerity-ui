import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuToggleSwitchDemo } from './su-toggle-switch-demo';

describe('SuToggleSwitchDemo', () => {
  let component: SuToggleSwitchDemo;
  let fixture: ComponentFixture<SuToggleSwitchDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuToggleSwitchDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuToggleSwitchDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
