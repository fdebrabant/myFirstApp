import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { SingUpComponent } from './sing-up/sing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    UserProfileComponent,
    MenuComponent,
    SingUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
