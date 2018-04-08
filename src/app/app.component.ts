import { Component } from '@angular/core';
import { Localstorage } from './annotations/localstorage.annotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Localstorage title = 'app';
}
