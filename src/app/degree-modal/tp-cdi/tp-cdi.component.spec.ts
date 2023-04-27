import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpCdiComponent } from './tp-cdi.component';

describe('BacCommerceComponent', () => {
  let component: TpCdiComponent;
  let fixture: ComponentFixture<TpCdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpCdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpCdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
