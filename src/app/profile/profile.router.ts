import {  Route, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';

 const ProfileRoutes: Route[]=[
  

];
@NgModule({
    imports: [RouterModule.forChild(ProfileRoutes)],
    exports: [RouterModule]
  })
  export class ProfileRoutesModule  { }