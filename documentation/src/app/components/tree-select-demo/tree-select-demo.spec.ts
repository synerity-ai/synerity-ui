import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeSelectDemo } from './tree-select-demo';

describe('TreeSelectDemo', () => {
  let component: TreeSelectDemo;
  let fixture: ComponentFixture<TreeSelectDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeSelectDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeSelectDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
