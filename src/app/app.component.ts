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
  public sToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1UVXlPVFUxTWpBME13PT0ifQ.eyJzdWIiOiJtdGhha3VyNkBzbGIuY29tIiwiaXNzIjoic2F1dGgtcHJldmlldy5zbGIuY29tIiwiYXVkIjoiZnVzZS1ldnQtY3NwLXNsYi1jb20tZHR3Y216LnNsYmFwcC5jb20iLCJpYXQiOjE1Mjk1Nzk5NjQsImV4cCI6MTUyOTY2NjM2NCwicHJvdmlkZXIiOiJzbGIuY29tIiwiY2xpZW50IjoiZnVzZS1ldnQtY3NwLXNsYi1jb20tZHR3Y216LnNsYmFwcC5jb20iLCJ1c2VyaWQiOiJtdGhha3VyNkBzbGIuY29tIiwiZW1haWwiOiJtdGhha3VyNkBzbGIuY29tIiwiYXV0aHoiOiIiLCJsYXN0bmFtZSI6IlRoYWt1ciIsImZpcnN0bmFtZSI6Ik1vbmlrYSIsImNvdW50cnkiOiIiLCJjb21wYW55IjoiIiwiam9idGl0bGUiOiIiLCJzdWJpZCI6ImFkOTQ2MzI3LWE0MDgtNDQ0ZC05ZjM5LWEwMDdjMzg0NTZhMy1Xd082OHciLCJpZHAiOiJjb3JwMiIsImhkIjoic2xiLmNvbSIsImRlc2lkIjoibXRoYWt1cjYtc2xiQHNsYi5kZXNpZC5ldmQuY2xvdWQuc2xiLWRzLmNvbSJ9.u2DSw7qT7rAwFw8k-ssrpZCLQO1_y_oAdFuFpPA8Oi4UwboyLMfEKJOQN82ECTXolqOhlYPyZEphEbT1IaUCVzLXnfAH4VWs23__kI1mF7mkA02-TUHbSDew4Fwf4N-4L0iIE6UE4C81sIC1iVgS8RMiovuQ822OGLa8miIM6VsamY63jwO7sywN-lYkr7aoB9i_lFmXi4yNN7ycB3ZvSV9rC6-gVwz4-ux5ziyMQs-WP0fnTbYiPmB76VOrD15_s1hRgA2DiSU4DzoBS05NdesAOWGcxemKv4taZrIg6R5pJjtFkjIqViPiMniH3mD0VkTq2I5MsR5iqwGUDg5eFg';
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
