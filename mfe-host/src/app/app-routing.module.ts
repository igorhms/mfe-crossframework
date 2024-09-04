import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: 'mfe1-angular',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.RemoteEntryModule),
  },
  {
    path: 'mfe2-angular13',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.RemoteEntryModule),
  },
  {
    matcher: startsWith('mfe3-react'),
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      remoteName: 'mfe3_react',
      exposedModule: './App',
      elementName: 'mfe3_react-element',
    } as WebComponentWrapperOptions,
    children: [
      {
        path: '**',
        component: WebComponentWrapper,
      },
    ],
  },
  {
    matcher: startsWith('mfe4-vue'),
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      remoteName: 'mfe4_vue',
      exposedModule: './App',
      elementName: 'mfe4_vue-element',
    } as WebComponentWrapperOptions,
    children: [
      {
        path: '**',
        component: WebComponentWrapper,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
