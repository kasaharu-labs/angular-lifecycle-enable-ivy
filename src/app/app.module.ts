import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Child100Component } from './presenters/child100/child100.component';
import { Child200Component } from './presenters/child200/child200.component';
import { Child210Component } from './presenters/child210/child210.component';
import { Child300Component } from './presenters/child300/child300.component';
import { Child310Component } from './presenters/child310/child310.component';
import { Child320Component } from './presenters/child320/child320.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Child100Component,
    Child200Component,
    Child210Component,
    Child300Component,
    Child310Component,
    Child320Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
