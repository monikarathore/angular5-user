import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public documentId = 'tenant1:welldb:wellFileRecord-0521f1c4-a70b-4aec-8083-0113ab9fa0b4';
  public query = '';
  public slbAccountId = 'tenant1';
  public sToken = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1UVXpNRFkzTlRNek5RPT0ifQ.eyJzdWIiOiJtdGhha3VyNkBzbGIuY29tIiwiaXNzIjoic2F1dGgtcHJldmlldy5zbGIuY29tIiwiYXVkIjoid2lkZ2V0LWNhdGFsb2d1ZS1ldnQtY3NwLXNsYi1jb20tZHR3Y216LnNsYmFwcC5jb20iLCJpYXQiOjE1MzA3MDE4ODMsImV4cCI6MTUzMDc4ODI4MywicHJvdmlkZXIiOiJzbGIuY29tIiwiY2xpZW50Ijoid2lkZ2V0LWNhdGFsb2d1ZS1ldnQtY3NwLXNsYi1jb20tZHR3Y216LnNsYmFwcC5jb20iLCJ1c2VyaWQiOiJtdGhha3VyNkBzbGIuY29tIiwiZW1haWwiOiJtdGhha3VyNkBzbGIuY29tIiwiYXV0aHoiOiIiLCJsYXN0bmFtZSI6IlRoYWt1ciIsImZpcnN0bmFtZSI6Ik1vbmlrYSIsImNvdW50cnkiOiIiLCJjb21wYW55IjoiIiwiam9idGl0bGUiOiIiLCJzdWJpZCI6ImFkOTQ2MzI3LWE0MDgtNDQ0ZC05ZjM5LWEwMDdjMzg0NTZhMy1Xd082OHciLCJpZHAiOiJjb3JwMiIsImhkIjoic2xiLmNvbSIsImRlc2lkIjoibXRoYWt1cjYtc2xiQHNsYi5kZXNpZC5ldmQuY2xvdWQuc2xiLWRzLmNvbSJ9.D0kvmksDe71y3t2hQFMEBJQUfn4J3x52mrIhWYZtweOhfLDCCEjCM_UHUaAWnSHfo3opaRUaI4Ar7kAFMw-XlCU2pO2wuypVZx19hZ8L8xqhIhOBwmM7epThIeBHdZe3dD4SwRXmtsEYQZpn5wBSaofHFYuDmmh7l3He0Za3YcXoWx_eCAliwoHvP6UDDgmddAUCtnnLGb5AvyQz-klxnYqbJkEK20KUYRirvAGcu0O4oK3FI442SPk9_UNiCmXxNnBmsYUDIxuDaaoJP7dvOWZR19MJeSjlJFP_r1t9WZVOn4cN_TTf7dZBJEIrzJcvhoaO6Ha5upDZv_mmC52OnA';
  public url = undefined;
  showDocViewer = false;
  closeIconVisibility = true;

  public closeDocumentViewer(isClosed: boolean) {
  }
  public closeDocView() {
    this.showDocViewer = false;
  }
  public toggleDocViewer() {
    this.showDocViewer = true;
  }
}


/*

https://www.npmjs.com/package/ngx-infinite-scroller


*/
