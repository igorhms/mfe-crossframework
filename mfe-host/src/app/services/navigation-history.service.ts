import { Injectable } from '@angular/core';
import { createBrowserHistory } from 'history';

@Injectable({ providedIn: 'root' })
export class NavigationHistoryService {
  public history = createBrowserHistory();
}
