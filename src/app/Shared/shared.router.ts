import {  Route, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';

 const SharedRoutes: Route[]=[
  

];
@NgModule({
    imports: [RouterModule.forChild(SharedRoutes)],
    exports: [RouterModule]
  })
  export class SharedRoutesModule  { }