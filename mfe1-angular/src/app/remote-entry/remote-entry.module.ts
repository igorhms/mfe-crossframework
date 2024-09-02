import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MFE1_ROUTES } from '../app.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(MFE1_ROUTES)],
})
export class RemoteEntryModule {}
