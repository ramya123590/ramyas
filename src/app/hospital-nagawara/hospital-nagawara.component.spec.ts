import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalNagawaraComponent } from './hospital-nagawara.component';

describe('HospitalNagawaraComponent', () => {
  let component: HospitalNagawaraComponent;
  let fixture: ComponentFixture<HospitalNagawaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalNagawaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalNagawaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
