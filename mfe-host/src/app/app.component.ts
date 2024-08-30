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

  async ngOnInit() {
    const remoteStore = await loadRemoteModule({
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      remoteName: 'mfe3_react',
      exposedModule: './Store',
    });

    console.log('Redux Store from React:', remoteStore.store.getState());

    remoteStore.store.dispatch({
      type: 'SET_USER',
      payload: 'ANGULAR - Nome alterado',
    });

    console.log(
      'New State - Redux Store from React:',
      remoteStore.store.getState()
    );
  }
}
