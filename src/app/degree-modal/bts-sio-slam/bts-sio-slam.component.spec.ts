import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtsSioSlamComponent } from './bts-sio-slam.component';

describe('BtsSioSlamComponent', () => {
  let component: BtsSioSlamComponent;
  let fixture: ComponentFixture<BtsSioSlamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtsSioSlamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtsSioSlamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
