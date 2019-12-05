import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailupdateComponent } from './userdetailupdate.component';

describe('UserdetailupdateComponent', () => {
  let component: UserdetailupdateComponent;
  let fixture: ComponentFixture<UserdetailupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
