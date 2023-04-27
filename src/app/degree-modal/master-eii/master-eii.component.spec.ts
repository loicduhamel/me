import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterEiiComponent } from './master-eii.component';

describe('MasterEiiComponent', () => {
  let component: MasterEiiComponent;
  let fixture: ComponentFixture<MasterEiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterEiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterEiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
