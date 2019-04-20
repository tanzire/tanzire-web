import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile.component';
import { MyActivitysComponent } from './my-activitys/my-activitys.component';
import { ProfileRoutesModule } from './profile.router';

@NgModule({
  declarations: [EditProfileComponent,MyActivitysComponent,ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutesModule,
    
  ]
})
export class ProfileModule { }
