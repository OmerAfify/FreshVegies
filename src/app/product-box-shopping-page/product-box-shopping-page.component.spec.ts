import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBoxShoppingPageComponent } from './product-box-shopping-page.component';

describe('ProductBoxShoppingPageComponent', () => {
  let component: ProductBoxShoppingPageComponent;
  let fixture: ComponentFixture<ProductBoxShoppingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBoxShoppingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBoxShoppingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
