import { Routes } from '@angular/router';
import { Nav1Component } from './components/nav1/nav1.component';
import { Nav2Component } from './components/nav2/nav2.component';
import { AppComponent } from './app.component';

export const MFE2_ROUTES: Routes = [
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
    component: AppComponent
  },
];
