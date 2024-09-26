import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MFE5_ROUTES } from './app.routes';

@NgModule({
  declarations: [],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(MFE5_ROUTES)],
})
export class AppModule {}
