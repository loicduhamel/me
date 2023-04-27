import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BepMrcuComponent } from './bep-mrcu.component';

describe('GcpCertificationComponent', () => {
  let component: BepMrcuComponent;
  let fixture: ComponentFixture<BepMrcuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BepMrcuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BepMrcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
