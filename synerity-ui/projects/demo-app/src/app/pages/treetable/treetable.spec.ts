import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Treetable } from './treetable';

describe('Treetable', () => {
  let component: Treetable;
  let fixture: ComponentFixture<Treetable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Treetable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Treetable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
