import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingUpComponent } from './sing-up/sing-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: 'profile', component: UserProfileComponent},
  {path: 'sing-up', component: SingUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
