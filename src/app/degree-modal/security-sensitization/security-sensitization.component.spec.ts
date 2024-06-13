import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritySensitizationComponent } from './security-sensitization.component';

describe('SecuritySensitizationComponent', () => {
  let component: SecuritySensitizationComponent;
  let fixture: ComponentFixture<SecuritySensitizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritySensitizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritySensitizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
