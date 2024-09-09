import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { WebComponentLoaderService } from '../services/web-component-loader.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingGuard implements CanActivate {
  constructor(
    private webComponentLoaderService: WebComponentLoaderService,
    private router: Router
  ) {}

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const remoteEntry = route.data['remoteEntry'] as string;
    const elementName = route.data['elementName'] as string;

    try {
      await this.webComponentLoaderService.loadWebComponent(
        remoteEntry,
        elementName
      );
      return true;
    } catch (error) {
      console.error('Erro ao carregar Web Component:', error);
      this.router.navigateByUrl('/error');
      return false;
    }
  }
}
