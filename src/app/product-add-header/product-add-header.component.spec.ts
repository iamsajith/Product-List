import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddHeaderComponent } from './product-add-header.component';

describe('ProductAddHeaderComponent', () => {
  let component: ProductAddHeaderComponent;
  let fixture: ComponentFixture<ProductAddHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
