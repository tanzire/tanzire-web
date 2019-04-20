import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArticalsComponent } from './home-articals.component';

describe('HomeArticalsComponent', () => {
  let component: HomeArticalsComponent;
  let fixture: ComponentFixture<HomeArticalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArticalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
