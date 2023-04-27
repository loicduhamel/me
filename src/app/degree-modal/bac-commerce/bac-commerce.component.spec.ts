import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacCommerceComponent } from './bac-commerce.component';

describe('BacCommerceComponent', () => {
  let component: BacCommerceComponent;
  let fixture: ComponentFixture<BacCommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacCommerceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
