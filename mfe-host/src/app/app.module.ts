import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactWrapperModule } from './modules/react-wrapper/react-wrapper.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule,
    ReactWrapperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
