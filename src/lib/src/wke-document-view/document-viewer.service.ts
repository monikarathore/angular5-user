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


  public getDocumentThumbViewerService(sToken: string, clientId: string,
    documentId: string, page: string, limit: number, offset, query, documentViewerServiceURL: string): Observable<any> {
    const options = this.getHttpHeaders(sToken, clientId);
    const url = this.getDocumentThumbViewerServiceURL(clientId + ':' + documentId, page, limit, offset, query, documentViewerServiceURL);
    return this.httpGet(url, options);
  }

  public getDocumentThumbViewerServiceURL(documentId: string, page: string, limit, offset, query, documentViewerServiceURL: string) {
    this.documentViewerServiceURL = documentViewerServiceURL ? documentViewerServiceURL : AppSettings.DOCUMENT_VIEWER_SERVICE_URL;
    if (query) {
      return this.documentViewerServiceURL + '/' + documentId + '/' + page + '?limit=' + limit + '&offset=' + offset + '&query=' + query;
    } else {
      return this.documentViewerServiceURL + '/' + documentId + '/' + page + '?limit=' + limit + '&offset=' + offset;
    }
  }

  public getDocumentViewerServiceForTotalPages(sToken: string, clientId: string, documentId: string, documentViewerServiceURL: string) {
    const options = this.getHttpHeaders(sToken, clientId);
    const url = this.getDocumentViewerServiceURLForTotalPages(clientId + ':' + documentId, documentViewerServiceURL);
    return this.httpGet(url, options);
  }
  public getDocumentViewerServiceURLForTotalPages(documentId: string, documentViewerServiceURL: string) {
    this.documentViewerServiceURL = documentViewerServiceURL ? documentViewerServiceURL : AppSettings.DOCUMENT_VIEWER_SERVICE_URL
    return this.documentViewerServiceURL + '/' + documentId;
  }

  private getHttpHeaders(sToken: string, clientId: string): any {

    this.sharedService.setClientId(clientId);
    this.sharedService.setStoken(sToken);

    let headers = new HttpHeaders().set('Accept', 'application/json');
    if (sToken && clientId) {
      headers = headers.set('authorization', `Bearer ` + sToken);
      headers = headers.set('slb-account-id', clientId);
    }
    const options = { headers: headers };
    return options;
  }

  public httpGet(url: string, options: any) {
    return this._http
      .get<any>(url, options)
      .catch(error => {
        if (error.status === 401 || error.status === 403 || error.status === 404) {
          return Observable.throw('no permission');
        }
        return Observable.throw('Server Error');
      });
  }
}
