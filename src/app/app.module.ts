import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageSectionComponent } from './home-page-section/home-page-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { GuestRouteHeaderComponent } from './guest-route-header/guest-route-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageSectionComponent,
    HeroSectionComponent,
    GuestRouteHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
