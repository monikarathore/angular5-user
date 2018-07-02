import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public documentId = 'welldb:wellFileRecord-0521f1c4-a70b-4aec-8083-0113ab9fa0b4';
  public query = '';
  public clientId = 'tenant1';
  public sToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1UVXpNRFF4TmpFeE13PT0ifQ.eyJzdWIiOiJtdGhha3VyNkBzbGIuY29tIiwiaXNzIjoic2F1dGgtcHJldmlldy5zbGIuY29tIiwiYXVkIjoid2lkZ2V0LWNhdGFsb2d1ZS1ldnQtY3NwLXNsYi1jb20tZHR3Y216LnNsYmFwcC5jb20iLCJpYXQiOjE1MzA1MDQ3MjUsImV4cCI6MTUzMDU5MTEyNSwicHJvdmlkZXIiOiJzbGIuY29tIiwiY2xpZW50Ijoid2lkZ2V0LWNhdGFsb2d1ZS1ldnQtY3NwLXNsYi1jb20tZHR3Y216LnNsYmFwcC5jb20iLCJ1c2VyaWQiOiJtdGhha3VyNkBzbGIuY29tIiwiZW1haWwiOiJtdGhha3VyNkBzbGIuY29tIiwiYXV0aHoiOiIiLCJsYXN0bmFtZSI6IlRoYWt1ciIsImZpcnN0bmFtZSI6Ik1vbmlrYSIsImNvdW50cnkiOiIiLCJjb21wYW55IjoiIiwiam9idGl0bGUiOiIiLCJzdWJpZCI6ImFkOTQ2MzI3LWE0MDgtNDQ0ZC05ZjM5LWEwMDdjMzg0NTZhMy1Xd082OHciLCJpZHAiOiJjb3JwMiIsImhkIjoic2xiLmNvbSIsImRlc2lkIjoibXRoYWt1cjYtc2xiQHNsYi5kZXNpZC5ldmQuY2xvdWQuc2xiLWRzLmNvbSJ9.Zsma5nJ2crfSsGIgQfKRaS2rpcJ6iEl9Z_XQJg9kvBdbhfr9y9Z1QN-oXIOJ9l_2ZO5g2MOcNiNdAfMjnRhMibdj7iUiU-s2201odsgI9uxBxx64GqGUzjfRy4Msb1FrVRquXYgY4hCF3FQvR4vUQJAKSeE8iuPdFj9lrZEwKORoUNTtKD_ElW0PEP6dk2MejKkuwxJRkc0Cupjs6nzu-Gm_ggafJKeAk5TIOtH8On_w0_1UG229sWWbqfnG2oE2QS9OR9P0JGgQ3YLPDbTKohf5Q621G8xCKZMOJ0n1jcAb6T5jzrHgENU-0DqLMz9Q8TbGyj-HX1yreLRJq-k6OQ';
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
