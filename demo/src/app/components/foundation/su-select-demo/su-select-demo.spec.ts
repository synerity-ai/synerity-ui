import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuSelectDemo } from './su-select-demo';

describe('SuSelectDemo', () => {
  let component: SuSelectDemo;
  let fixture: ComponentFixture<SuSelectDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuSelectDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuSelectDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
