import { async, TestBed, inject, getTestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { DocumentViewerService } from '../src/wke-document-view/document-viewer.service';
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
    it('should construct', async(inject(
        [DocumentViewerService, HttpTestingController], (service, backend) => {
            expect(service).toBeDefined();
            expect(service._http).toBeDefined();
        })));

    it('should test document viewer service when query entered', async(inject(
        [DocumentViewerService, HttpTestingController], (service, backend) => {
            service.getDocumentThumbViewerService('sToken', 'clientId', documentId, 'page', 1, 0, 'well',
                documentViewerServiceURL).subscribe(
                    document => {
                        expect(document).toBeDefined();
                    },
                    err => console.log(err),
            );
            const url = documentViewerServiceURL + '/' + documentId + '/page?limit=' + 1 + '&offset=' + 0 + '&query=' + 'well';
            backend.match({ url: url, method: 'GET' })[0].flush({});
        })));


    it('should test document viewer getDocumentViewerServiceURLForTotalPages', async(inject(
        [DocumentViewerService, HttpTestingController], (service, backend) => {
            service.getDocumentViewerServiceForTotalPages('sToken', 'clientId', documentId, documentViewerServiceURL).subscribe(
                document => {
                    expect(document).toBeDefined();
                },
                err => console.log(err),
            );
            const url1 = documentViewerServiceURL + '/' + documentId;
            backend.match({ url: url1, method: 'GET' })[0].flush({});
        })));


});
