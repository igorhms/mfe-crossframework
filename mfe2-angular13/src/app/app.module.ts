import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Nav1Component } from './components/nav1/nav1.component';
import { Nav2Component } from './components/nav2/nav2.component';
import { RemoteEntryModule } from './remote-entry/remote-entry.module';

@NgModule({
  declarations: [AppComponent, Nav1Component, Nav2Component],
  imports: [BrowserModule, CommonModule, AppRoutingModule, RemoteEntryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
