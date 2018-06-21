import { inject, TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WkeDocumentViewComponent } from '../src/wke-document-view/wke-document-view.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { DocumentViewerService } from '../src/services/wke-document.service';
import { SharedService } from '../src/services/shared.service';
import 'rxjs/add/observable/of';
import { LoadingSpinnerModule } from '@slb-angular/dls-components';


describe('Document Viewer Component', () => {
    let mockDocumentViewerService;
    beforeEach(async(() => {
        mockDocumentViewerService = new MockDocumentViewerService();
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, CommonModule, FormsModule],
            declarations: [WkeDocumentViewComponent, LoadingSpinnerModule],
            providers: [
                {
                    provide: DocumentViewerService,
                    useFactory: () => mockDocumentViewerService,
                }
            ]
        });

    }));

});


class MockDocumentViewerService {

    public callDocumentViewerService(sToken: string, clientId: string, documentId: string,
         pageNumber: number, documentViewerServiceURL: string) {
        return Observable.of({
            'pageNumber': 1,
            'documentId': 'oga:wellFileRecord',
            'thumbnailUrl': 'https://storage.googleapis.com/thumbnail.png',
            'imageUrl': 'https://storage.googleapis.com/image.png'
        });
    }

    public callDocumentViewerServiceForTotalPages(sToken: string, clientId: string, documentId: string, documentViewerServiceURL: string) {
        return Observable.of({
            'totalCount': 44,
            'offset': 0,
            'limit': 20,
            'queryString': '*:*',
            'records': [
                {
                    'pageNumber': 1,
                    'documentId': 'oga:wellFileRecord',
                    'thumbnailUrl': 'https://storage.googleapis.com/thumbnail.png',
                    'imageUrl': 'https://storage.googleapis.com/image.png'
                }
            ]
        });
    }

}

class MockDocumentViewerServiceError {

    public callDocumentViewerService(sToken: string, clientId: string, 
        documentId: string, pageNumber: number, documentViewerServiceURL: string) {
        return new Observable(observer => observer.error('Bad Request - Document Id is mandatory'));
    }

    public callDocumentViewerServiceForTotalPages(sToken: string, clientId: string, documentId: string, documentViewerServiceURL: string) {
        return new Observable(observer => observer.error('Bad Request - Document Id is mandatory'));
    }
}

