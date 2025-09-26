import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidAvatar } from './rapid-avatar';

describe('RapidAvatar', () => {
  let component: RapidAvatar;
  let fixture: ComponentFixture<RapidAvatar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapidAvatar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidAvatar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
