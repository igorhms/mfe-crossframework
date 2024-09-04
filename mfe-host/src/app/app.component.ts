import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mfe-host';

  constructor(private router: Router) {
    (window as any).AngularRouter = router;
  }

  async ngOnInit() {}
}
