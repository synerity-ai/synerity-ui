import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipDemo } from './chip-demo';

describe('ChipDemo', () => {
  let component: ChipDemo;
  let fixture: ComponentFixture<ChipDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
