import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IftLabel } from './ift-label';

describe('IftLabel', () => {
  let component: IftLabel;
  let fixture: ComponentFixture<IftLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IftLabel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IftLabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
