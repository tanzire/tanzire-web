import {  Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShopNowComponent } from '../shop-now/shop-now.component';
import { ProductsDetailsComponent } from '../products-details/products-details.component';
import { CartComponent } from 'src/app/orderPlacePage/cart/cart.component';
import { ShoppingBagComponent } from 'src/app/orderPlacePage/shopping-bag/shopping-bag.component';
 const productsPageRoutes:Route[]=[
   {path:'',redirectTo:'products',pathMatch:'full'},
   {path:'products', component:ShopNowComponent},
   {path:'product',component:ProductsDetailsComponent},
   {path:'cartitem',component:CartComponent,
  children:[{path:'',component:ShoppingBagComponent}
           
]},
 
 ]
  
  

    @NgModule({
        imports: [RouterModule.forChild(productsPageRoutes)],
        exports: [RouterModule]
      })
      export class ProductsPageRouterModule { }