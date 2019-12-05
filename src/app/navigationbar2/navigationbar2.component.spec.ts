import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigationbar2Component } from './navigationbar2.component';

describe('Navigationbar2Component', () => {
  let component: Navigationbar2Component;
  let fixture: ComponentFixture<Navigationbar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navigationbar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navigationbar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
