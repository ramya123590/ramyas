import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryreplayComponent } from './enquiryreplay.component';

describe('EnquiryreplayComponent', () => {
  let component: EnquiryreplayComponent;
  let fixture: ComponentFixture<EnquiryreplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiryreplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryreplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
