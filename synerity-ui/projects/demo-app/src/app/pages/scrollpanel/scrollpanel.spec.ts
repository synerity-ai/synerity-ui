import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scrollpanel } from './scrollpanel';

describe('Scrollpanel', () => {
  let component: Scrollpanel;
  let fixture: ComponentFixture<Scrollpanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scrollpanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scrollpanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
