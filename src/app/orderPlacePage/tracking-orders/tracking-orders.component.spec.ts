import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingOrdersComponent } from './tracking-orders.component';

describe('TrackingOrdersComponent', () => {
  let component: TrackingOrdersComponent;
  let fixture: ComponentFixture<TrackingOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
