import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicdialog } from './dynamicdialog';

describe('Dynamicdialog', () => {
  let component: Dynamicdialog;
  let fixture: ComponentFixture<Dynamicdialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dynamicdialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dynamicdialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
