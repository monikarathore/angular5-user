import { FileSizePipe } from '../src/pipe/file-size.pipe';
import { WkeDocumentViewComponent } from '../src/wke-document-view/wke-document-view.component';
import { LoadingSpinnerModule } from '@slb-angular/dls-components';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { inject, TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DocumentViewerService } from '../src/wke-document-view/document-viewer.service';

describe('WkeDocumentViewComponent', () => {
    let component;
    let fixture: ComponentFixture<WkeDocumentViewComponent>;
    const documentViewerServiceURL = 'https://dev-document/document';
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WkeDocumentViewComponent, FileSizePipe],
            imports: [LoadingSpinnerModule, InfiniteScrollModule],
            providers: [
                {
                    provide: DocumentViewerService
                }
            ]
        });
    }));
    it('should test ngOnChanges when document id change', () => {
        fixture = TestBed.createComponent(WkeDocumentViewComponent);
        component = fixture.componentInstance;
        spyOn(component, 'getDocumentData');
        spyOn(component, 'getDocumentTumb');
        component.documentId = 'id';
        component.ngOnChanges({
            documentId: new SimpleChange(null, component.documentId, true),
        });
        expect(component.pagelimit).toEqual(6);
        expect(component.offset).toEqual(0);
        expect(component.getDocumentData).toHaveBeenCalled();
    });
    it('should have a defined component', () => {
        fixture = TestBed.createComponent(WkeDocumentViewComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        expect(component).toBeDefined();
    });

    it('should test toggleExpandedState', () => {
        fixture = TestBed.createComponent(WkeDocumentViewComponent);
        component = fixture.componentInstance;
        spyOn(component.close, 'emit');
        component.toggleExpandedState();
        expect(component.close.emit).toHaveBeenCalled();
    });
    it('should test page limit increase by 6 when scroll', () => {
        fixture = TestBed.createComponent(WkeDocumentViewComponent);
        component = fixture.componentInstance;
        component.pagelimit = 6;
        spyOn(component, 'getDocumentTumb').and.returnValue('m');
        component.scrollDown();
        expect(component.pagelimit).toBeGreaterThanOrEqual(12);
        expect(component.pagelimit).toBe(12);
    });


});

class MockDocumentViewerService {
    public callDocumentViewerService(sToken: string, clientId: string, documentViewerServiceURL: string, documentId: string) {
        return Observable.of({
            'limit': 6,
            'offset': 0,
            'queryString': '*:*',
            'records': [
                {
                    'documentId': 'oga:wellFileRecord',
                    'imageUrl': 'https://storage.googleapis.com/image.png',
                    'pageNumber': 1,
                    'thumbnailUrl': 'https://storage.googleapis.com/thumbnail.png'
                }
            ]
        });
    }

}
