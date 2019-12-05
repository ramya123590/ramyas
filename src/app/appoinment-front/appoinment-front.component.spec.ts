import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentFrontComponent } from './appoinment-front.component';

describe('AppoinmentFrontComponent', () => {
  let component: AppoinmentFrontComponent;
  let fixture: ComponentFixture<AppoinmentFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppoinmentFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
