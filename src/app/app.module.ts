import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app.router';

import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
   
 
  ],

  imports: [
    BrowserModule,
    AppRouterModule,
    RouterModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
