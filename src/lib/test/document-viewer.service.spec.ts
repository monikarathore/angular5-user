import { async, TestBed, inject, getTestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { DocumentViewerService } from '../src/services/wke-document.service';
import { SharedService } from '../src/services/shared.service';
import { Constants } from '../src/services/constants';
import { AppSettings } from '../src/services/app.settings';
import { constants } from 'fs';

describe('Document Viewer Service', () => {
    const documentViewerServiceURL = 'https://dev-document/document';
    const documentId = 'oga:wellFileRecord';
    const query = 'oil';
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SharedService, DocumentViewerService
            ],
            imports: [HttpClientModule, HttpClientTestingModule]
        });
    });

    afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
        backend.verify();
    }));

    // fit('callDocumentThumbViewerService',
    //     async(inject([DocumentViewerService, HttpTestingController], (service, backend) => {

    //         service.callDocumentThumbViewerService('sToken', 'clientId', documentId).subscribe(
    //             document => {
    //                 expect(document).toBeDefined();
    //             },
    //             err => console.log(err)
    //         );
    //         const url = documentViewerServiceURL + '/' + documentId + Constants.PAGE_LIMIT_OFFSET + '&query=oil';
    //         backend.match({ url: url, method: 'GET' })[0].flush({});

    //         const url1 = documentViewerServiceURL + '/' + documentId + Constants.PAGE_LIMIT_OFFSET;
    //         service.callDocumentThumbViewerService(undefined, undefined, undefined, documentId).subscribe(
    //             page => {
    //                 expect(page).toBeDefined();
    //             },
    //             err => console.log(err),
    //         );
    //         backend.match({ url: url1, method: 'GET' })[0].flush();

    //     })));

    // it('should construct', async(inject(
    //     [DocumentViewerService, HttpTestingController], (service, backend) => {
    //         expect(service).toBeDefined();
    //         expect(service._http).toBeDefined();
    //     })));

    // fit('should test callDocumentThumbViewerService for page', async(inject(
    //     [DocumentViewerService, HttpTestingController], (service, backend) => {
    //         service.callDocumentThumbViewerService('sToken', 'clientId', documentId).subscribe(
    //             page => {
    //                 expect(page).toBeDefined();
    //             },
    //             err => console.log(err),
    //         );
    //         const url = documentViewerServiceURL + '/' + documentId + Constants.PAGE_LIMIT_OFFSET + '&query=oil';
    //         const url1 = documentViewerServiceURL + '/' + documentId + Constants.PAGE_LIMIT_OFFSET;
    //           backend.match({url: url, method: 'GET'})[0].flush({});
    //         service.callDocumentThumbViewerService(undefined, undefined, documentId).subscribe(
    //             page => {
    //                 expect(page).toBeDefined();
    //             },
    //             err => console.log(err),
    //         );
    //         backend.match({url: url1, method: 'GET'})[0].flush({});
    //     })));
    it('should test callDocumentViewerServiceForTotalPages for page', async(inject(
        [DocumentViewerService, HttpTestingController], (service, backend) => {
            service.callDocumentViewerServiceForTotalPages('sToken', 'clientId', documentId, documentViewerServiceURL).subscribe(
                document => {
                    expect(document).toBeDefined();
                },
                err => console.log(err),
            );
            const url = documentViewerServiceURL + '/' + documentId;
            backend.match({ url: url, method: 'GET' })[0].flush({});
        })));
    it('should test callDocumentThumbViewerService', async(inject(
        [DocumentViewerService, HttpTestingController], (service, backend) => {
            service.callDocumentThumbViewerService('sToken', 'clientId', documentId, query, documentViewerServiceURL).subscribe(
                page => {
                    expect(page).toBeDefined();
                },
                err => console.log(err),
            );
            const url = documentViewerServiceURL + '/' + documentId + Constants.PAGE_LIMIT_OFFSET + query;
            backend.match({ url: url, method: 'GET' })[0].flush({});


            service.callDocumentThumbViewerService('sToken', 'clientId', documentId, documentViewerServiceURL).subscribe(
                page => {
                    expect(page).toBeDefined();
                },
                err => console.log(err),
            );
            const url2 = documentViewerServiceURL + '/' + documentId + Constants.PAGE_LIMIT_OFFSET;
            backend.match({ url: url2, method: 'GET' })[0].flush({});
        })));
});
