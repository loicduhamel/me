import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdprSensitizationComponent } from './gdpr-sensitization.component';

describe('GdprSensitizationComponent', () => {
  let component: GdprSensitizationComponent;
  let fixture: ComponentFixture<GdprSensitizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdprSensitizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GdprSensitizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
