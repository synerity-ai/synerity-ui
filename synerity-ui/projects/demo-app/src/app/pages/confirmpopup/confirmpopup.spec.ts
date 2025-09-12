import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirmpopup } from './confirmpopup';

describe('Confirmpopup', () => {
  let component: Confirmpopup;
  let fixture: ComponentFixture<Confirmpopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Confirmpopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Confirmpopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
