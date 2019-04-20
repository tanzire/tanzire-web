import { NgModule } from "@angular/core";
import { MessagesComponent } from './messages/messages.component';
import { CommonModule } from '@angular/common';
import { SharedRoutesModule } from './shared.router';

@NgModule({
    declarations: [MessagesComponent],
    imports: [
      CommonModule,
      SharedRoutesModule,
      
    ]
  })
  export class SharedModule{}