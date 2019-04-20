import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddressBookComponent } from './address-book/address-book.component';
import { CouponsComponent } from './coupons/coupons.component';
import { DashBoardPageComponent } from './dash-board-page/dash-board-page.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { HelpComponent } from './help/help.component';
import { LoyaltypointsComponent } from './loyaltypoints/loyaltypoints.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { OrdersComponent } from './orders/orders.component';
import { SavedcardsComponent } from './savedcards/savedcards.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardRoutesModule } from './dashboard.router';
import { DashBoardComponent } from './dashBoard.component';
import { ProfileModule } from '../profile/profile.module';
import { MessagesComponent } from '../Shared/messages/messages.component';

@NgModule({
  declarations: [AddressBookComponent,
    DashBoardComponent,
    CouponsComponent,
    DashBoardPageComponent,
    DashboardNavComponent,
    HelpComponent,
    LoyaltypointsComponent,
    NewsFeedComponent,
    OrdersComponent,
    SavedcardsComponent,
    SettingsComponent,
    MessagesComponent
  
    
  ],

  imports: [
    CommonModule,
    DashboardRoutesModule,
    RouterModule,
    ProfileModule

  ]
})
export class DashBoardModule { }
