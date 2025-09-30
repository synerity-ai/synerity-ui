import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuButtonDemo } from './su-button-demo';

describe('SuButtonDemo', () => {
  let component: SuButtonDemo;
  let fixture: ComponentFixture<SuButtonDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuButtonDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuButtonDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
