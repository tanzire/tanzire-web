import {  Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { HomePageAllComponent } from './home-page-all/home-page-all.component';
import { DashBoardPageComponent } from '../dashBoard/dash-board-page/dash-board-page.component';
import { DashBoardComponent } from '../dashBoard/dashBoard.component';
import { ShopNowComponent } from '../products/shop-now/shop-now.component';
import { SellerProfileComponent } from '../seller/seller-profile/seller-profile.component';
import { SellerProductsComponent } from '../seller/seller-products/seller-products.component';
 const homeRoutes:Route[]=[
   {path:'',redirectTo:'Home',pathMatch:'full'},
    {path:'Home', component:HomeComponent,
  children:[
    {path:'',component:HomePageAllComponent},
    {path:'dashboardpage' , component:DashBoardPageComponent},

    {path:'Products',component:ShopNowComponent},
    {path:'sProfile',component:SellerProfileComponent}

     ]},
    ];
  

    @NgModule({
        imports: [RouterModule.forChild(homeRoutes)],
        exports: [RouterModule]
      })
      export class HomeRoutesModule { }