// error.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page.component';

const ERROR_ROUTES: Routes = [
  {
    path: '',
    component: ErrorPageComponent,
  },
];

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [CommonModule, RouterModule.forChild(ERROR_ROUTES)],
  exports: [ErrorPageComponent],
})
export class ErrorModule {}
