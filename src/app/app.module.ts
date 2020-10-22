import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// MDB Angular Pro
import { WavesModule, ModalModule, CarouselModule } from 'ng-uikit-pro-standard'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, WavesModule, ModalModule, CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
