import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitySensitizationComponent } from './quality-sensitization.component';

describe('QualitySensitizationComponent', () => {
  let component: QualitySensitizationComponent;
  let fixture: ComponentFixture<QualitySensitizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualitySensitizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualitySensitizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
