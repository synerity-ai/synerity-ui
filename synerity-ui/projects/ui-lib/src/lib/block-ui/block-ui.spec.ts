import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockUi } from './block-ui';

describe('BlockUi', () => {
  let component: BlockUi;
  let fixture: ComponentFixture<BlockUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
