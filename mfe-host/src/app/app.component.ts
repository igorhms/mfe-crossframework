import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { getUsernameObservable, setUsername } from 'shared-state-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mfe-host';
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
}
