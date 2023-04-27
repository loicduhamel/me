import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachelorManComMarComponent } from './bachelor-man-com-mar.component';

describe('BachelorManComMarComponent', () => {
  let component: BachelorManComMarComponent;
  let fixture: ComponentFixture<BachelorManComMarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BachelorManComMarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BachelorManComMarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
