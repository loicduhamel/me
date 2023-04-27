import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcpCertificationComponent } from './gcp-certification.component';

describe('GcpCertificationComponent', () => {
  let component: GcpCertificationComponent;
  let fixture: ComponentFixture<GcpCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcpCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcpCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
