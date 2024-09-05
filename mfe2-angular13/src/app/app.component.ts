import { Component } from '@angular/core';
import { VERSION } from '@angular/core';
import { getUsernameObservable } from 'shared-state-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mfe2-angular13';
  version = VERSION;

  username: string | null = null;

  async ngOnInit() {
    getUsernameObservable().subscribe(
      (username: string | null) => (this.username = username)
    );
  }
}
