import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPoliciesComponent } from './seller-policies.component';

describe('SellerPoliciesComponent', () => {
  let component: SellerPoliciesComponent;
  let fixture: ComponentFixture<SellerPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
