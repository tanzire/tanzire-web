import {  Route, RouterModule } from '@angular/router'
import { DashBoardComponent } from './dashBoard.component';
import { DashBoardPageComponent } from './dash-board-page/dash-board-page.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { LoyaltypointsComponent } from './loyaltypoints/loyaltypoints.component';
import { SettingsComponent } from './settings/settings.component';
import { CouponsComponent } from './coupons/coupons.component';
import { HelpComponent } from './help/help.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { OrdersComponent } from './orders/orders.component';
import { SavedcardsComponent } from './savedcards/savedcards.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { MyActivitysComponent } from '../profile/my-activitys/my-activitys.component';
import { EditProfileComponent } from '../profile/edit-profile/edit-profile.component';
import { OrderDetailsComponent } from '../orderPlacePage/order-details/order-details.component';
import { TrackingOrdersComponent } from '../orderPlacePage/tracking-orders/tracking-orders.component';
import { MessagesComponent } from '../Shared/messages/messages.component';

 const DashboardRoutes: Route[]=[
   {path:'', redirectTo:'dashboardpage',pathMatch:'full'},
    {path:'dashboardpage', component:DashBoardPageComponent, 
    children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard',component:DashBoardComponent},
    {path:'addressBook', component:AddressBookComponent},
    {path:'loyaltyPoints',component:LoyaltypointsComponent},
    {path:'settings', component:SettingsComponent},
    {path:'coupons', component:CouponsComponent},
    {path:'help', component:HelpComponent},
    {path:'newsfeeds', component:NewsFeedComponent},
    {path:'orders', component:OrdersComponent},
    {path:'cards', component:SavedcardsComponent},
    {path:'wishlist', component:WishlistComponent},  
    {path:'editprofile',component:EditProfileComponent},
    {path:'myactivity',component:MyActivitysComponent},
    {path:'orderdetails', component:OrderDetailsComponent},
    {path:'trackorder',component:TrackingOrdersComponent},
    {path:'message',component:MessagesComponent}



    ]},
    {path:'profile', component:ProfileComponent},

];
@NgModule({
    imports: [RouterModule.forChild(DashboardRoutes)],
    exports: [RouterModule]
  })
  export class DashboardRoutesModule  { }