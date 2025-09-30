import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuSelectButtonDemo } from './su-select-button-demo';

describe('SuSelectButtonDemo', () => {
  let component: SuSelectButtonDemo;
  let fixture: ComponentFixture<SuSelectButtonDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuSelectButtonDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuSelectButtonDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
