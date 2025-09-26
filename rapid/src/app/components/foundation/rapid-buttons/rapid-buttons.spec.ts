import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidButtons } from './rapid-buttons';

describe('RapidButtons', () => {
  let component: RapidButtons;
  let fixture: ComponentFixture<RapidButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapidButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
