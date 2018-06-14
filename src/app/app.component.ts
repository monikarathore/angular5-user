import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  showDocViewer = false;
  closeIcon = true;
  public closeDocView() {
    this.showDocViewer = false;
  }
  public toggleDocViewer() {
      this.showDocViewer = true;
  }
}
