import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidBadge } from './rapid-badge';

describe('RapidBadge', () => {
  let component: RapidBadge;
  let fixture: ComponentFixture<RapidBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapidBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidBadge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
