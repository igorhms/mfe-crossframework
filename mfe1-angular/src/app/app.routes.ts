import { Routes } from '@angular/router';
import { Nav1Component } from './navegacao-module/nav1/nav1.component';
import { Nav2Component } from './navegacao-module/nav2/nav2.component';

export const MFE1_ROUTES: Routes = [
  {
    path: 'nav1',
    component: Nav1Component,
  },
  {
    path: 'nav2',
    component: Nav2Component,
  },
  {
    path: '',
    redirectTo: 'nav1',
    pathMatch: 'full',
  },
];
