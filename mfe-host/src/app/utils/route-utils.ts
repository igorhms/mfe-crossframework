import {loadRemoteModule} from './federation-utils';
import {Routes} from '@angular/router';
import {FederationPlugin} from '../microfrontends/microfrontend.model';

const APPLICATION_ROUTES: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: WelcomeComponent
  // }
];

export function buildRoutes(options: ReadonlyArray<FederationPlugin>): Routes {
  // @ts-ignore
  const lazyRoutes: Routes = options?.map((mfe: FederationPlugin) => {
    switch (mfe.type) {
      case 'react': {
        return {
          path: mfe.routePath,
          children: [
            {
              path: '**',
              loadChildren: () => import('../modules/react-wrapper/react-wrapper.module').then((m) => {
                return m.ReactWrapperModule;
              }),
              data: {configuration: mfe},
            }
          ]
        };
      }
    //   case 'vue': {
    //     return {
    //       path: mfe.routePath,
    //       children: [
    //         {
    //           path: '**',
    //           component: VueWrapperComponent,
    //           data: {configuration: mfe}
    //         }
    //       ]
    //     };
    //   }
    //   default: {
    //     return {
    //       path: mfe.routePath, // TODO: add UnknownPluginType component to catch incorrect configuration
    //       children: [
    //         {
    //           path: '**',
    //           component: SelfRunWrapperComponent,
    //           data: {configuration: mfe}
    //         }
    //       ]
    //     };
    //   }
    }
  });

  return [...(lazyRoutes || []), ...APPLICATION_ROUTES];
}
