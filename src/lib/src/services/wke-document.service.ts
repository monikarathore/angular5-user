import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../services/app.settings';
import { Constants } from '../services/constants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SharedService } from '../services/shared.service';
import 'rxjs/add/operator/map';

@Injectable()
export class DocumentViewerService {
  _http: HttpClient;
  public documentViewerServiceURL: string;
  constructor(private http: HttpClient, public sharedService: SharedService) {
    this._http = http;
  }


  public callDocumentThumbViewerService(sToken: string, clientId: string,
    documentId: string, query: string, documentViewerServiceURL: string) {
    const options = this.getHttpHeaders(sToken, clientId);
    const url = this.getDocumentThumbViewerServiceURL(documentId, query, documentViewerServiceURL);
    console.log(url);
    return this.httpGet(url, options);
  }

  public getDocumentThumbViewerServiceURL(documentId: string, query: string, documentViewerServiceURL: string, ) {
    debugger;
    this.documentViewerServiceURL = documentViewerServiceURL ? documentViewerServiceURL : AppSettings.DOCUMENT_VIEWER_SERVICE_URL;
    if (query) {
      return this.documentViewerServiceURL + '/' + documentId + Constants.PAGE_LIMIT_OFFSET + '&query=' + query;
    } else {
      return this.documentViewerServiceURL + '/' + documentId + Constants.PAGE_LIMIT_OFFSET;
    }
  }

  public callDocumentViewerServiceForTotalPages(sToken: string, clientId: string, documentId: string, documentViewerServiceURL: string) {
    const options = this.getHttpHeaders(sToken, clientId);
    const url = this.getDocumentViewerServiceURLForTotalPages(documentId, documentViewerServiceURL);
    console.log(url);
    return this.httpGet(url, options);
  }
  public getDocumentViewerServiceURLForTotalPages(documentId: string, documentViewerServiceURL: string) {
    this.documentViewerServiceURL = documentViewerServiceURL ? documentViewerServiceURL : AppSettings.DOCUMENT_VIEWER_SERVICE_URL;
    return this.documentViewerServiceURL + '/' + documentId;
  }

  private getHttpHeaders(sToken: string, clientId: string): any {

    this.sharedService.setClientId(clientId);
    this.sharedService.setStoken(sToken);

    let headers = new HttpHeaders().set('Accept', 'application/json');
    if (sToken && clientId) {
      headers = headers.set('stoken', sToken);
      headers = headers.set('clientid', clientId);
    }
    const options = { headers: headers };
    return options;
  }

  public httpGet(url: string, options: any) {
    return this._http
      .get<any>(url, options)
      .catch(error => {
        if (error.status === 401 || error.status === 403) {
          return Observable.throw('no permission');
        }
        return Observable.throw('Server Error');
      });
  }
}
