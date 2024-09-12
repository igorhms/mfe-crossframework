import { AfterContentInit, Component, ElementRef, Input, OnDestroy } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { FederationPlugin } from '../../../../microfrontends/microfrontend.model';
import { EventBusService } from '../../../../microfrontends/event-bus.service';
import { GlobalNavigationService } from '../../../../microfrontends/global-navigation.service';
import { loadRemoteModule } from '../../../../utils/federation-utils';

import { createRoot, hydrateRoot, Root } from 'react-dom/client';
import { Subscription } from 'rxjs';
import { NavigationHistoryService } from 'src/app/services/navigation-history.service';


@Component({
  selector: 'react-wrapper',
  template: '',
  styles: [':host {height: 100%; overflow: auto;}']
})
export class ReactWrapperComponent implements AfterContentInit, OnDestroy {
  propsInternal!: Record<string, unknown>;

  @Input() set props(props: Record<string, unknown>) {
    this.propsInternal = props;
    this.updateComponentProps(props);
  }

  @Input() configuration!: FederationPlugin;

  private reactMFEModule: any;

  reactRoot!: Root;

  subscription$: Subscription = new Subscription();


  constructor(private hostRef: ElementRef,
    private route: ActivatedRoute,
    private router: Router,
    private eventBusService: EventBusService,
    private globalNavigationService: GlobalNavigationService,
    private navigationHistory: NavigationHistoryService
  ) {
  }

  async ngAfterContentInit(): Promise<void> {
    if (!this.configuration) {
      this.route.data
        .pipe(take(1))
        .subscribe(async (data: Data) => {
          const configuration: FederationPlugin = data['configuration'];
          await this.renderComponent(configuration, data['props']);
        });
    }
    // await this.renderComponent(this.configuration, this.propsInternal);
  }

  private async renderComponent(configuration: FederationPlugin, props: Record<string, unknown>): Promise<void> {
    this.configuration = configuration;
    const component = await loadRemoteModule({
      remoteEntry: configuration.remoteEntry,
      remoteName: configuration.remoteName,
      exposedModule: configuration.exposedModule
    });
    this.reactMFEModule = component[configuration.moduleClassName!];
    const ReactElement = React.createElement(
      this.reactMFEModule,
      this.constructProps({
        ...props,
        basename: this.configuration.routePath
      })
    );
    // ReactDOM.render(ReactElement, this.hostRef.nativeElement);
    if (!this.reactRoot) {
      this.reactRoot = createRoot(this.hostRef.nativeElement);
    }
    this.reactRoot.render(ReactElement);
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
    this.reactRoot?.unmount();
  }

  private updateComponentProps(props: Record<string, unknown>): void {
    if (this.reactMFEModule) {
      const ReactElement = React.createElement(this.reactMFEModule, this.constructProps({
        ...props,
        basename: this.configuration.routePath
      }));
      this.reactRoot = hydrateRoot(this.hostRef.nativeElement, ReactElement);
    }
  }

  private constructProps(routeProps: any): Record<string, unknown> {
    if (!routeProps) {
      routeProps = {};
    }
    if (!this.propsInternal) {
      this.propsInternal = {};
    }

    console.log("[React Wrapper] ===== ConstructProps History ::: ", this.navigationHistory.history);
    return {
      ...this.props,
      ...routeProps,
      eventBus: this.eventBusService,
      globalNavigation: this.globalNavigationService,
      sharedHistory: this.navigationHistory.history
    };
  }
}
