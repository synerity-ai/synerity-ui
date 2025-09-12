import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputnumber } from './inputnumber';

describe('Inputnumber', () => {
  let component: Inputnumber;
  let fixture: ComponentFixture<Inputnumber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inputnumber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inputnumber);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
