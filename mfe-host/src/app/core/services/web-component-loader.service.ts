import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WebComponentLoaderService {
  constructor(private router: Router) {}

  async loadWebComponent(
    remoteEntry: string,
    elementName: string
  ): Promise<void> {
    try {
      await this.loadScript(remoteEntry);
      // if (!customElements.get(elementName)) {
      //   throw new Error(`Elemento ${elementName} não registrado`);
      // }
    } catch (error) {
      console.error('Erro ao carregar o Web Component:', error);
      this.router.navigate(['/error']);
      throw error;
    }
  }

  private loadScript(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => resolve();
      script.onerror = () =>
        reject(new Error(`Falha ao carregar o script ${url}`));
      document.head.appendChild(script);
    });
  }
}
