import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes=[
 
    {path:'',loadChildren:'./home/home.module#HomeModule'},
    {path:'dashboard',loadChildren:'./dashBoard/dashBoard.module#DashBoardModule'},
    {path:'productpage',loadChildren:'./products/products-page/products-page.module#ProductsPageModule'},
    // {path:'order',loadChildren:'./orderPlacePage/orderPlacePage.module#OrderPlacePageModule'},
    {path:'profile', loadChildren:'./profile/profile.module#ProfileModule'},
    {path:'sProfile', loadChildren:'./seller/seller.module#SellerModule'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }