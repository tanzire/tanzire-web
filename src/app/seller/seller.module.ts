import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSellerComponent } from './about-seller/about-seller.component';
import { SellerPoliciesComponent } from './seller-policies/seller-policies.component';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { SellerReviewsComponent } from './seller-reviews/seller-reviews.component';
import { SellerRoutesModule } from './seller.router';
import { ProductsPageModule } from '../products/products-page/products-page.module';


@NgModule({
  declarations: [AboutSellerComponent,
    SellerPoliciesComponent,
    SellerProductsComponent,
    SellerProfileComponent,
    SellerReviewsComponent],
  imports: [
    CommonModule,
    SellerRoutesModule,
    ProductsPageModule
    
  ]
})
export class SellerModule { }
