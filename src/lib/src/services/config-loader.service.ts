import {Injectable, Inject, InjectionToken} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
export interface WidgetConfig {
  url: string;
  clientid: string;
}
export const WIDGET_CONFIG = new InjectionToken<WidgetConfig>('WIDGET_CONFIG');

export abstract class SearchListConfigLoader {
  abstract getConfig(): Observable<any>;
}

/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
@Injectable()
export class DefaultConfigLoader extends SearchListConfigLoader {
  constructor(@Inject(WIDGET_CONFIG) private config: WidgetConfig) {
    super();
  }
  getConfig(): Observable<any> {
    return of(this.config);
  }
}
