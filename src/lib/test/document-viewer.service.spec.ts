import { async, TestBed, inject, getTestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { DocumentViewerService } from '../src/services/wke-document.service';
import { SharedService } from '../src/services/shared.service';
import { Constants } from '../src/services/constants';
import { AppSettings } from '../src/services/app.settings';

describe('Document Viewer Service', () => {
    const documentViewerServiceURL = 'https://dev-document/document';
    const documentId = 'oga:wellFileRecord';
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SharedService, DocumentViewerService,
            ],
            imports: [HttpClientModule, HttpClientTestingModule]
        });
    });

    afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
        backend.verify();
    }));


    it('should construct', async(inject(
        [DocumentViewerService, HttpTestingController], (service, backend) => {
            expect(service).toBeDefined();
            expect(service._http).toBeDefined();
        })));

        it('should test callDocumentThumbViewerService for page', async(inject(
            [DocumentViewerService, HttpTestingController], (service, backend) => {
                  service.callDocumentThumbViewerService('sToken', 'clientId', documentId, documentViewerServiceURL).subscribe(
                      page => {
                          expect(page).toBeDefined();
                      },
                      err => console.log(err),
                  );
                //   const url = documentViewerServiceURL + '/' + documentId + '/page/1?query=well';
                //   const url1 = documentViewerServiceURL + '/' + documentId + '/page/1';
                //   backend.match({url: url, method: 'GET'})[0].flush();
                //   service.callDocumentThumbViewerService(undefined, undefined, undefined, documentId, 1, 
                //     documentViewerServiceURL).subscribe(
                //     page => {
                //         expect(page).toBeDefined();
                //     },
                //     err => console.log(err),
                // );
                // backend.match({url: url1, method: 'GET'})[0].flush();
              })));
});
