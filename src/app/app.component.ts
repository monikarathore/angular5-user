import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public documentId = 'oga:wellFileRecord-MjkgMjctIDEvMjlfMjctXzFfcmVwX1dFTExfQ09NUF8yMzcyNTAyOTIucGRm';
  public query = '';
  public clientId = 'fuse-evt-csp-slb-com-dtwcmz.slbapp.com';
  public sToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1UVXpNREkwTXpJNU9BPT0ifQ.eyJzdWIiOiJtdGhha3VyNkBzbGIuY29tIiwiaXNzIjoic2F1dGgtcHJldmlldy5zbGIuY29tIiwiYXVkIjoid2lkZ2V0LWNhdGFsb2d1ZS1ldmQtY3NwLXNsYi1jb20tZHR3ZGV2LnNsYmFwcC5jb20iLCJpYXQiOjE1MzAyNzEyMTIsImV4cCI6MTUzMDM1NzYxMiwicHJvdmlkZXIiOiJzbGIuY29tIiwiY2xpZW50Ijoid2lkZ2V0LWNhdGFsb2d1ZS1ldmQtY3NwLXNsYi1jb20tZHR3ZGV2LnNsYmFwcC5jb20iLCJ1c2VyaWQiOiJtdGhha3VyNkBzbGIuY29tIiwiZW1haWwiOiJtdGhha3VyNkBzbGIuY29tIiwiYXV0aHoiOiIiLCJsYXN0bmFtZSI6IlRoYWt1ciIsImZpcnN0bmFtZSI6Ik1vbmlrYSIsImNvdW50cnkiOiIiLCJjb21wYW55IjoiIiwiam9idGl0bGUiOiIiLCJzdWJpZCI6ImFkOTQ2MzI3LWE0MDgtNDQ0ZC05ZjM5LWEwMDdjMzg0NTZhMy1Xd082OHciLCJpZHAiOiJjb3JwMiIsImhkIjoic2xiLmNvbSIsImRlc2lkIjoibXRoYWt1cjYtc2xiQHNsYi5kZXNpZC5ldmQuY2xvdWQuc2xiLWRzLmNvbSJ9.hQRqTruiRV44VT286QFjdv0DEr_FMJmx-7HpOqDFr9gT_JNlScKNbTciAteOzkOd9Ai3iJeVKpS1ArjDse5z4FOq9i2S_w4Nlu0vvPCDbkjXbzjcfngVRJwEH1GTvIOiE81bRu895XQuOxze6CMD7i_tCRVqy42KdoSBzcAJC2PAm_esPTYdA7nUQe1gl-uMAn086vl6beTyzUcxvsONUzMHC2bGhAdMmRgk7mDJqd8jYaJplsmX94eL4HvJqct-Wza4PkCw-CA2gwdIjz3o_4z7UVvLV_Tb3LDdEkRzYr5ggpJhYDmem8puBO6p5ocHNgrWqvi2Z6G9p-joToxwnA';
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
