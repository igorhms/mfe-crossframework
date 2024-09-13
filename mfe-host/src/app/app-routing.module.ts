import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorHandlingGuard } from './core/guards/error-handling-remote.guard';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { VueWrapperComponent } from './modules/vue-wrapper/vue-wrapper.component';

const APP_ROUTES: Routes = [
  {
    path: 'mfe1-angular',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
      })
        .then((m) => m.RemoteEntryModule)
        .catch((error) => {
          console.error('Erro ao carregar mfe1-angular:', error);
          return import('./components/error-page/error.module').then(
            (m) => m.ErrorModule
          );
        }),
  },
  {
    path: 'mfe2-angular13',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Module',
      })
        .then((m) => m.RemoteEntryModule)
        .catch((error) => {
          console.error('Erro ao carregar mfe1-angular:', error);
          return import('./components/error-page/error.module').then(
            (m) => m.ErrorModule
          );
        }),
  },
  {
    // matcher: startsWith('mfe3-react'),
    // canActivate: [ErrorHandlingGuard],
    path: 'mfe3-react',
    children: [
      {
        path: '**',
        loadChildren: () => import('./modules/react-wrapper/react-wrapper.module').then((m) => {
          return m.ReactWrapperModule;
        }),
        data: {
          configuration: {
            type: 'react',
            remoteEntry: 'http://localhost:4203/remoteEntry.js',
            remoteName: 'mfe3_react',
            exposedModule: 'App',
            displayName: 'Nested routes example',
            routePath: 'mfe3-react',
            navigationAlias: 'mfe3-react',
            moduleClassName: 'RootComponent'
          }
        }
      },
    ],
  },
  // {
  //   matcher: startsWith('mfe3-react'),
  //   component: WebComponentWrapper,
  //   data: {
  //     remoteEntry: 'http://localhost:4203/remoteEntry.js',
  //     remoteName: 'mfe3_react',
  //     exposedModule: './App',
  //     elementName: 'mfe3_react-element',
  //     type: 'script',
  //   } as WebComponentWrapperOptions,
  //   canActivate: [ErrorHandlingGuard],
  //   children: [
  //     {
  //       path: '**',
  //       component: WebComponentWrapper,
  //     },
  //   ],
  // },
  {
    path: 'mfe4-vue',
    // canActivate: [ErrorHandlingGuard],
    children: [
      {
        path: '**',
        component: VueWrapperComponent,
        data: {
          configuration: {
            type: 'vue',
            remoteEntry: 'http://localhost:4204/remoteEntry.js',
            remoteName: 'mfe4_vue',
            exposedModule: './App',
            displayName: 'Simple Vue Component',
            routePath: 'mfe4-vue',
            navigationAlias: 'mfe4-vue'
          }
        }
      },
    ],
  },
  // {
  //   matcher: startsWith('mfe4-vue'),
  //   component: WebComponentWrapper,
  //   data: {
  //     remoteEntry: 'http://localhost:4204/remoteEntry.js',
  //     remoteName: 'mfe4_vue',
  //     exposedModule: './App',
  //     elementName: 'mfe4_vue-element',
  //   } as WebComponentWrapperOptions,
  //   canActivate: [ErrorHandlingGuard],
  //   children: [
  //     {
  //       path: '**',
  //       component: WebComponentWrapper,
  //     },
  //   ],
  // },
  {
    path: 'lib-angular',
    loadChildren: () => import('lib-angular-module').then(m => m.LibAngularModule)
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
