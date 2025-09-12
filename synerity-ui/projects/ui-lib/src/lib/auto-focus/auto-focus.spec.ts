import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFocus } from './auto-focus';

describe('AutoFocus', () => {
  let component: AutoFocus;
  let fixture: ComponentFixture<AutoFocus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoFocus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoFocus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
