import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MFE1_ROUTES } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(MFE1_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
