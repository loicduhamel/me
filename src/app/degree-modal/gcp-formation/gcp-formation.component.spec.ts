import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcpFormationComponent } from './gcp-formation.component';

describe('GcpFormationComponent', () => {
  let component: GcpFormationComponent;
  let fixture: ComponentFixture<GcpFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcpFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcpFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
