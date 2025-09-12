import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Splitter } from './splitter';

describe('Splitter', () => {
  let component: Splitter;
  let fixture: ComponentFixture<Splitter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Splitter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Splitter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
