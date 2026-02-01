import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySplit } from './category-split';

describe('CategorySplit', () => {
  let component: CategorySplit;
  let fixture: ComponentFixture<CategorySplit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorySplit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySplit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
