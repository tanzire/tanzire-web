import {  Route, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { ShopNowComponent } from '../products/shop-now/shop-now.component';
import { AboutSellerComponent } from './about-seller/about-seller.component';
import { SellerPoliciesComponent } from './seller-policies/seller-policies.component';
import { SellerReviewsComponent } from './seller-reviews/seller-reviews.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { SellerProductsComponent } from './seller-products/seller-products.component';

 const SellerRoutes: Route[]=[

  {path:'', redirectTo:'sProducts', pathMatch:'full'},
  {path:'sProfile', component:SellerProfileComponent, children:[
      {path:'',component:SellerProductsComponent},
    {path:'sProducts',component:ShopNowComponent},
    {path:'sAbout', component:AboutSellerComponent},
    {path:'sPolices', component:SellerPoliciesComponent},
    {path:'sReviews', component:SellerReviewsComponent}
  ]}
 

];
@NgModule({
    imports: [RouterModule.forChild(SellerRoutes)],
    exports: [RouterModule]
  })
  export class SellerRoutesModule  { }