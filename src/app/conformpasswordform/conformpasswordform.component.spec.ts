import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformpasswordformComponent } from './conformpasswordform.component';

describe('ConformpasswordformComponent', () => {
  let component: ConformpasswordformComponent;
  let fixture: ComponentFixture<ConformpasswordformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConformpasswordformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformpasswordformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
