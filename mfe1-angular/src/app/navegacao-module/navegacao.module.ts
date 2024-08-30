import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Nav1Component } from './nav1/nav1.component';
import { Nav2Component } from './nav2/nav2.component';

const routes: Routes = [
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

@NgModule({
  declarations: [Nav1Component, Nav2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NavegacaoModule {}
