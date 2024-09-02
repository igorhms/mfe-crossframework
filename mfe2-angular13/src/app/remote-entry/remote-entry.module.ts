import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MFE2_ROUTES } from '../app.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(MFE2_ROUTES)],
})
export class RemoteEntryModule {}
