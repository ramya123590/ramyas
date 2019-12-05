import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpformComponent } from './otpform.component';

describe('OtpformComponent', () => {
  let component: OtpformComponent;
  let fixture: ComponentFixture<OtpformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
