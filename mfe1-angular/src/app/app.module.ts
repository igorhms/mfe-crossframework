import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemoteEntryModule } from './remote-entry/remote-entry.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule, RemoteEntryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
