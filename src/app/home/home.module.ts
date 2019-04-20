import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutesModule } from './home.router';
import { RouterModule } from '@angular/router';
import { HomeTagsComponent } from './home-tags/home-tags.component';
import { HomeCollectionsComponent } from './home-collections/home-collections.component';
import { DesignersPanelComponent } from './designers-panel/designers-panel.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeArticalsComponent } from './home-articals/home-articals.component';
import { HomePageAllComponent } from './home-page-all/home-page-all.component';
import { DashBoardModule } from '../dashBoard/dashBoard.module';
import { ProductsPageModule } from '../products/products-page/products-page.module';
import { SellerModule } from '../seller/seller.module';

@NgModule({
  declarations: [HomeComponent,
   HomeCollectionsComponent,
    DesignersPanelComponent,
    CategoriesComponent,
    HomeArticalsComponent,
    HomeTagsComponent,   
    HomePageAllComponent,

  
  ],
 
  imports: [
    CommonModule,
    HomeRoutesModule,
    RouterModule,
    DashBoardModule,
    ProductsPageModule,
    SellerModule
    

  ],


})
export class HomeModule { }
