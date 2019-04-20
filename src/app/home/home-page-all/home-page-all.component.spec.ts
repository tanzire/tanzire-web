import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageAllComponent } from './home-page-all.component';

describe('HomePageAllComponent', () => {
  let component: HomePageAllComponent;
  let fixture: ComponentFixture<HomePageAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
