import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public documentId = 'oga:wellFileRecord-MjkgMjctIDEvMjlfMjctXzFfcmVwX1dFTExfQ09NUF8yMzcyNTAyOTIucGRm';
  public query = 'oil';
  public clientId = 'fuse-evt-csp-slb-com-dtwcmz.slbapp.com';
  public sToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1UVXlPVFl6T0RRMU1nPT0ifQ.eyJzdWIiOiJtdGhha3VyNkBzbGIuY29tIiwiaXNzIjoic2F1dGgtcHJldmlldy5zbGIuY29tIiwiYXVkIjoiZnVzZS1ldnQtY3NwLXNsYi1jb20tZHR3Y216LnNsYmFwcC5jb20iLCJpYXQiOjE1Mjk2NjgwMjEsImV4cCI6MTUyOTc1NDQyMSwicHJvdmlkZXIiOiJzbGIuY29tIiwiY2xpZW50IjoiZnVzZS1ldnQtY3NwLXNsYi1jb20tZHR3Y216LnNsYmFwcC5jb20iLCJ1c2VyaWQiOiJtdGhha3VyNkBzbGIuY29tIiwiZW1haWwiOiJtdGhha3VyNkBzbGIuY29tIiwiYXV0aHoiOiIiLCJsYXN0bmFtZSI6IlRoYWt1ciIsImZpcnN0bmFtZSI6Ik1vbmlrYSIsImNvdW50cnkiOiIiLCJjb21wYW55IjoiIiwiam9idGl0bGUiOiIiLCJzdWJpZCI6ImFkOTQ2MzI3LWE0MDgtNDQ0ZC05ZjM5LWEwMDdjMzg0NTZhMy1Xd082OHciLCJpZHAiOiJjb3JwMiIsImhkIjoic2xiLmNvbSIsImRlc2lkIjoibXRoYWt1cjYtc2xiQHNsYi5kZXNpZC5ldmQuY2xvdWQuc2xiLWRzLmNvbSJ9.cfeVBFhnvTlU5HLpJKCuYYQIof2c_fdfngITavLPCPhc31jPaIUCjj_E-53TJQ3XQog_aBl85uJGfGPTAzfuV6uTBwOpyFSJqRZ38XHr9GN-HlGdF-2h_0LgCOgAr_bqyCy00iZTHGXVP9Iv4PU2Mk4SqyZs9bKHnXvTbMg3SXzmrebxePWzqk5eVKX9vaJiXLpBKG0qfqckcZCpJ9ZpruckXakeFMOT2Q6eO21drifUxO2vlCQdlRNg_qxhAjeevU8XgQZ2sj6RBdMq_mC7OOp_flxwrQD7_YZkYI6lknH-Yua-NPksNOMA1il7IrKP2R8KAq_J4C-AA4faGaOQXg';
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
