import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputtext } from './inputtext';

describe('Inputtext', () => {
  let component: Inputtext;
  let fixture: ComponentFixture<Inputtext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inputtext]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inputtext);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
