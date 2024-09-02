import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MFE2_ROUTES } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(MFE2_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
