import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public documentId = 'welldb:wellFileRecord-0521f1c4-a70b-4aec-8083-0113ab9fa0b4';
  public query = '';
  public slbAccountId = 'tenant1';
  public sToken = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1UVXpNRFV3TWpVeU13PT0ifQ.eyJzdWIiOiJtdGhha3VyNkBzbGIuY29tIiwiaXNzIjoic2F1dGgtcHJldmlldy5zbGIuY29tIiwiYXVkIjoid2lkZ2V0LWNhdGFsb2d1ZS1ldnQtY3NwLXNsYi1jb20tZHR3Y216LnNsYmFwcC5jb20iLCJpYXQiOjE1MzA1OTQxNTEsImV4cCI6MTUzMDY4MDU1MSwicHJvdmlkZXIiOiJzbGIuY29tIiwiY2xpZW50Ijoid2lkZ2V0LWNhdGFsb2d1ZS1ldnQtY3NwLXNsYi1jb20tZHR3Y216LnNsYmFwcC5jb20iLCJ1c2VyaWQiOiJtdGhha3VyNkBzbGIuY29tIiwiZW1haWwiOiJtdGhha3VyNkBzbGIuY29tIiwiYXV0aHoiOiIiLCJsYXN0bmFtZSI6IlRoYWt1ciIsImZpcnN0bmFtZSI6Ik1vbmlrYSIsImNvdW50cnkiOiIiLCJjb21wYW55IjoiIiwiam9idGl0bGUiOiIiLCJzdWJpZCI6ImFkOTQ2MzI3LWE0MDgtNDQ0ZC05ZjM5LWEwMDdjMzg0NTZhMy1Xd082OHciLCJpZHAiOiJjb3JwMiIsImhkIjoic2xiLmNvbSIsImRlc2lkIjoibXRoYWt1cjYtc2xiQHNsYi5kZXNpZC5ldmQuY2xvdWQuc2xiLWRzLmNvbSJ9.huxAFvVmLkMRcfwLAvWCSmQXa-LnredYMyqE8j10MSMulheX_z_0IDjnz1HIih1RGsMJaT7tj8eHtcZn6HTpxl5Ra1gWTQjfsfRKrIShJ5tQQOG5ts2wxQU9W82F3hgkUEPVSpuKelzrYCYieaxlNzzEzmUznv5BXDdY9wjD-jB-XTdpv4A9eXBluKqufsWmSNDgh44HJQU2wAI5oLgeEKx0KCe71GdGXNxeFeBT7dabUOf5S0b4_NNWrCND9wr8iXt0E5kOrcn8j7qZsWqXnETUJ3hdcvDJe5mIMGLr_jRWCCIwTy8x20H0TUvG_Z5I-cKq7EfN73yBSlqsv97c1Q';
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
