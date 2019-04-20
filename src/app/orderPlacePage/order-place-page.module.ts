import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping/shipping.component';
import { CartComponent } from './cart/cart.component';
import { ShoppingBagComponent } from './shopping-bag/shopping-bag.component';
import { OrderPlacePageComponent } from './order-place-page.component';
import { OrderPlacingComponent } from './order-placing/order-placing.component';
import { TrackingOrdersComponent } from './tracking-orders/tracking-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderPlacePageRouterModule } from './order-place-page.router';
import { WishlistComponent } from '../dashBoard/wishlist/wishlist.component';
import { ProductRecommendationsComponent } from '../products/product-recommendations/product-recommendations.component';

@NgModule({
  declarations: [ShippingComponent,
    CartComponent,
    ShoppingBagComponent,
     OrderPlacePageComponent,
     OrderPlacingComponent,
     TrackingOrdersComponent,
     OrderDetailsComponent,
     ProductRecommendationsComponent,
     WishlistComponent,
     
    ],
  imports: [
    CommonModule,
    OrderPlacePageRouterModule,

  ]
})
export class OrderPlacePageModule { }
