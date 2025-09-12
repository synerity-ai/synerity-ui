import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleClass } from './style-class';

describe('StyleClass', () => {
  let component: StyleClass;
  let fixture: ComponentFixture<StyleClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleClass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleClass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
