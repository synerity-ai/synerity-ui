import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollPanel } from './scroll-panel';

describe('ScrollPanel', () => {
  let component: ScrollPanel;
  let fixture: ComponentFixture<ScrollPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
