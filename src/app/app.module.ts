import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Child100Component } from './presenters/child100/child100.component';
import { Child200Component } from './presenters/child200/child200.component';
import { Child210Component } from './presenters/child210/child210.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Child100Component,
    Child200Component,
    Child210Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
