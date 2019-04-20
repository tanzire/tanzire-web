import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSellerComponent } from './about-seller.component';

describe('AboutSellerComponent', () => {
  let component: AboutSellerComponent;
  let fixture: ComponentFixture<AboutSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
