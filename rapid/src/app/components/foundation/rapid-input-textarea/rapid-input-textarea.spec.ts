import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidInputTextarea } from './rapid-input-textarea';

describe('RapidInputTextarea', () => {
  let component: RapidInputTextarea;
  let fixture: ComponentFixture<RapidInputTextarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapidInputTextarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidInputTextarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
