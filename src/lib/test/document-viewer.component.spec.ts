import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FileSizePipe } from '../src/pipe/file-size.pipe';
import { WkeDocumentViewComponent } from '../src/wke-document-view/wke-document-view.component';
import  { LoadingSpinnerModule }  from  '@slb-angular/dls-components';

describe('WkeDocumentViewComponent', () => {
    let component: WkeDocumentViewComponent;
    let fixture: ComponentFixture<WkeDocumentViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WkeDocumentViewComponent, FileSizePipe],
            imports: [LoadingSpinnerModule]
        })
            .compileComponents();
    }));

    fit('should create the WkeDocumentViewComponent', async(() => {
        const fixture = TestBed.createComponent(WkeDocumentViewComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    
});