import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentSensitizationComponent } from './environment-sensitization.component';

describe('EnvironmentSensitizationComponent', () => {
  let component: EnvironmentSensitizationComponent;
  let fixture: ComponentFixture<EnvironmentSensitizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentSensitizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentSensitizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
