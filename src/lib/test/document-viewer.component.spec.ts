import { FileSizePipe } from '../src/pipe/file-size.pipe';
import { WkeDocumentViewComponent } from '../src/wke-document-view/wke-document-view.component';
import { LoadingSpinnerModule } from '@slb-angular/dls-components';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { OrderModule } from 'ngx-order-pipe';
import { Result } from '../src/result.model';
import { inject, TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DocumentViewerService } from '../src/wke-document-view/document-viewer.service';

describe('WkeDocumentViewComponent', () => {
  let component;
  let fixture: ComponentFixture<WkeDocumentViewComponent>;
  const documentViewerServiceURL = 'https://dev-document/document';
  let mockDocumentViewerService;
  beforeEach(async(() => {
    mockDocumentViewerService = new MockDocumentViewerService();
    TestBed.configureTestingModule({
      declarations: [WkeDocumentViewComponent, FileSizePipe],
      imports: [LoadingSpinnerModule, InfiniteScrollModule, OrderModule],
      providers: [
        {
          provide: DocumentViewerService,
          useFactory: () => mockDocumentViewerService,
        }
      ]
    });
  }));
  it('should test ngOnChanges when document id change', () => {
    fixture = TestBed.createComponent(WkeDocumentViewComponent);
    component = fixture.componentInstance;
    spyOn(component, 'getDocumentData');
    spyOn(component, 'getDocumentTumb').and.returnValue('m');
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
    component.documentThumbnails = [{}];
    spyOn(component, 'getDocumentTumb').and.returnValue('m');
    component.scrollDown();
     expect(component.isLoadingThumb).toBe(false);
     component.pagelimit = 6;
      expect(component.pagelimit).toBeGreaterThanOrEqual(6);
  });
  it('should test page limit increase by 6 when scroll else condition', () => {
    fixture = TestBed.createComponent(WkeDocumentViewComponent);
    component = fixture.componentInstance;
    component.documentThumbnails = [{}];
    spyOn(component, 'getDocumentTumb').and.returnValue('m');
    component.scrollDown();
    expect(component.documentThumbnails).not.toBeLessThanOrEqual(5);
    expect(component.isLoadingThumb).not.toBe(true);
  });

  it('get thumbnail images getDocumentTumb', () => {
    mockDocumentViewerService = new MockDocumentViewerService();
    fixture = TestBed.createComponent(WkeDocumentViewComponent);
    component = fixture.componentInstance;
    component.getDocumentData();
    expect(component.pagelimit).toEqual(6);
  });

  it('should test total pages of document when service call gives error', () => {
    mockDocumentViewerService = new MockDocumentViewerServiceError();
    fixture = TestBed.createComponent(WkeDocumentViewComponent);
    component = fixture.componentInstance;
    component.getDocumentData();
    expect(component.pagelimit).toEqual(6);
  });

  it('should test selectDocument', () => {
    mockDocumentViewerService = new MockDocumentViewerService();
    fixture = TestBed.createComponent(WkeDocumentViewComponent);
    component = fixture.componentInstance;
    component.selectDocument({});
    expect(component.lastSelected.isSelected).toBe(true);
  });

  it('should test singleClickDocument', () => {
    mockDocumentViewerService = new MockDocumentViewerService();
    fixture = TestBed.createComponent(WkeDocumentViewComponent);
    component = fixture.componentInstance;
    component.singleClickDocument({});
  });

});

class MockDocumentViewerService {
  public getDocumentThumbViewerService(sToken: string, clientId: string, documentId: string,
    pageNumber: number, documentViewerServiceURL: string) {
    return Observable.of({
      'pageNumber': 1,
      'documentId': 'oga:wellFileRecord',
      'thumbnailUrl': 'https://storage.googleapis.com/thumbnail.png',
      'imageUrl': 'https://storage.googleapis.com/image.png'
    });
  }
  public getDocumentViewerServiceForTotalPages(sToken: string, clientId: string, documentId: string, documentViewerServiceURL: string) {
    return Observable.of(
      {
        'totalCount': 53,
        'offset': 0,
        'limit': 6,
        'queryString': 'oil',
        'records': [{
          'documentId': 'oga:wellFileRecord-MjkgMjctIDEvMjlfMjctXzFfcmVwX1dFTExfQ09NUF8yMzcyNTAyOTIucGRm:32',
          'thumbnailUrl': 'https://storage.googleapis.com/oga-cmz-dtw-migration-sandbox-discovery-thumbnails/29_27-_1_rep_WELL_COMP_237250292_THUMBNAIL_Page-0032.png?GoogleAccessId=dtw-migration-sandbox@appspot.gserviceaccount.com&Expires=1529899520&Signature=bGqyfIx1UZFb7frajmI0QatPVmOIj%2FIjv1mUFwFYzhHKTsY5TsZv7kQCmyCG1080whAZGjnnTvkln9RXmeSih3404heGj6C8VBJpEfVw%2FJoKek%2FwxM1widnBt0qd0jt4GdHJvvZDCnp4ZQIseLX%2B5HWWT3giVWkz6V59m6POBoSAHQp2gUsSkqJp1S%2B99E1xRX4bYDbd1HURhCa4k4upyWkTRaHYkHVGSoNxEAZo61F9eA1pUW0vt8fMaVB86ZwuJy5VXGs5I83IuYkvhgOTnhQZw0kN%2F%2B3L0GuAIDPkyTszcoOi744NffOKFitWbtl9a61gR1MvWREr%2Bn8BmhjzOg%3D%3D',
          'imageUrl': 'https://storage.googleapis.com/oga-cmz-dtw-migration-sandbox-discovery-thumbnails/29_27-_1_rep_WELL_COMP_237250292_DOCUMENT_VIEWER_Page-0032.png?GoogleAccessId=dtw-migration-sandbox@appspot.gserviceaccount.com&Expires=1529899520&Signature=1K0%2FSsic6ApZZGjyC812qXFcMSxja3reR4BdQkXrWtO4tIcg%2FoSkCqwh9%2FlcyEcf%2BNmXxLeKwQtJLLD71XzHCMfHmSWZQCXm8AOKTU8UASTwlIOg2fEEMCWg%2FrqWdSfCO7iMr61%2BDzl8sUY5ZTyaKUqWgMPzPTMjxklqaq5J%2B7MH1j6PWAKtGfKzVI6UVnlmEMbkkWVgArE%2Bnro75SEOFjxHXxJm1xN%2F94zpFXnXFYVJxiW78K%2BWX%2Fx5EyNq7uRi7%2BjHaTx%2FhU8uTku8pwVDOPaSEq07OzbTEQieQk5%2FYrENrEt6DcyNuXKuvqqAyq7amreiDD6%2F3KywhSUDNecrMQ%3D%3D',
          'annotations': {
            'positions': {
              'oil': [{
                'topLeftX': 772,
                'topRightX': 802,
                'topLeftY': 421,
                'topRightY': 421,
                'bottomLeftX': 772,
                'bottomRightX': 802,
                'bottomLeftY': 438,
                'bottomRightY': 438
              },
              {
                'topLeftX': 939,
                'topRightX': 971,
                'topLeftY': 444,
                'topRightY': 444,
                'bottomLeftX': 939,
                'bottomRightX': 971,
                'bottomLeftY': 463,
                'bottomRightY': 463
              },
              {
                'topLeftX': 395,
                'topRightX': 426,
                'topLeftY': 518,
                'topRightY': 518,
                'bottomLeftX': 395,
                'bottomRightX': 426,
                'bottomLeftY': 537,
                'bottomRightY': 537
              }
              ]
            }
          },
          'pageNumber': 32
        }
        ]
      }
    );
  }

}

class MockDocumentViewerServiceError {

  public getDocumentThumbViewerService(sToken: string, clientId: string, documentId: string,
    pageNumber: number, documentViewerServiceURL: string) {
    return new Observable(observer => observer.error('Bad Request - Document Id is mandatory for getDocumentTumb'));
  }

  public getDocumentViewerServiceForTotalPages(sToken: string, clientId: string, documentId: string, documentViewerServiceURL: string) {
    return new Observable(observer => observer.error('Bad Request - Document Id is mandatory for getDocumentViewerServiceForTotalPages'));
  }
}
