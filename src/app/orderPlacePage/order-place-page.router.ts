import {  Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShippingComponent } from './shipping/shipping.component';
import { CartComponent } from './cart/cart.component';

 const orderRoutes:Route[]=[
   {path:'',component:CartComponent,
children:[
    {path:'shipping&Payment', component:ShippingComponent},
    
]}

];
    @NgModule({
        imports: [RouterModule.forChild(orderRoutes)],
        exports: [RouterModule]
      })
      export class OrderPlacePageRouterModule { }