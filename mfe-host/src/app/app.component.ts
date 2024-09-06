import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { getUsernameObservable, setUsername } from 'shared-state-lib';

enum AplicacaoRota {
  HOST = '/',
  MFE1_Angular = '/mfe1-angular',
  MFE2_Angular13 = '/mfe2-angular',
  MFE3_React = '/mfe3-react',
  MFE4_Vue = '/mfe4-vue',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mfe-host';
  rotasEnum = AplicacaoRota;

  username: string | null = null;
  newUsername: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    (window as any).AngularRouter = router;
    (window as any).NavigationEnd = NavigationEnd;
  }

  async ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) console.log('ROUTE - ', event);
    });

    getUsernameObservable().subscribe(
      (username: string | null) => (this.username = username)
    );
  }

  updateUsername() {
    setUsername(this.newUsername);
  }

  navigate(route: string): void {
    this.router.navigateByUrl(route);
  }

  isRouteActive(route: AplicacaoRota | string): boolean {
    const url = this.router.url;
    if (route == 'host') return url == '/';
    return url.startsWith(route);
  }
}
