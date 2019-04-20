import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { ProductRecommendationsComponent } from '../product-recommendations/product-recommendations.component';
import { ProductReviewsComponent } from '../product-reviews/product-reviews.component';
import { ProductsComponent } from '../products/products.component';
import { ProductsDetailsComponent } from '../products-details/products-details.component';
import { ProductsPageComponent } from './products-page.component';
import { ProductsPageRouterModule } from './products-page.router';
import { ShopNowComponent } from '../shop-now/shop-now.component';
import { OrderPlacePageModule } from 'src/app/orderPlacePage/order-place-page.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductReviewsComponent,
    ProductFilterComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    ProductsPageComponent,
    ShopNowComponent
  
  ],
  
  imports: [
    CommonModule,
    ProductsPageRouterModule,
    RouterModule,
    OrderPlacePageModule,
    // OrderPlacePageModule
    
  ]
})
export class ProductsPageModule { }
