import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyActivitysComponent } from './my-activitys.component';

describe('MyActivitysComponent', () => {
  let component: MyActivitysComponent;
  let fixture: ComponentFixture<MyActivitysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyActivitysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyActivitysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
