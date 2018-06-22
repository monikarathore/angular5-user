import {
    Component, OnInit, OnDestroy, Output, EventEmitter, Input,
    SimpleChanges, ElementRef, ViewChild, Renderer2, OnChanges,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DocumentViewerService } from './document-viewer.service';
@Component({
    selector: 'wke-document-view',
    templateUrl: './wke-document-view.component.html',
    styleUrls: ['./wke-document-view.component.scss']
})
export class WkeDocumentViewComponent implements OnInit, OnChanges {
    wkeDocumentData: any;
    isLoading = true;
    isLoadingThumb = true;
    pageUrl = 'page';
    pagelimit = 6;
    offset = 0;
    public url;
    documentThumbnails: any;
    @Input() public closeIconVisibility: boolean;
    @Output() public close: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() public documentId: string;
    @Input() public query: string;
    @Input() public documentViewerServiceURL: string;
    @Input() public sToken: string;
    @Input() public clientId: string;
    @ViewChild('panel', { read: ElementRef }) public panel: ElementRef;
    constructor(public documentViewerService: DocumentViewerService, private renderer: Renderer2) { }

    public ngOnInit() {
    }

    public toggleExpandedState() {
        this.close.emit(true);
    }
    public scrollDown() {
        this.isLoadingThumb = true;
      if (this.pagelimit >= 6) {
            this.pagelimit += 6;
            this.getDocumentTumb(this.pagelimit, this.offset);
        }

    }
    public ngOnChanges(changes: SimpleChanges) {
        for (const propName in changes) {
            if (changes.hasOwnProperty(propName)) {
                if (propName === 'documentId') {
                    this.getDocumentData();
                }
            }
        }
    }
    public getDocumentData() {
        this.documentViewerService.getDocumentViewerServiceForTotalPages(this.sToken, this.clientId, this.documentId,
            this.documentViewerServiceURL).subscribe((document) => {
                this.wkeDocumentData = document;
                this.getDocumentTumb(this.pagelimit, this.offset);
            });
    }
    public getDocumentTumb(limitPage, pageoffset) {
        this.documentViewerService.getDocumentThumbViewerService(this.sToken, this.clientId, this.documentId,
            this.pageUrl, this.pagelimit, this.offset, this.query, this.documentViewerServiceURL).subscribe((thumbResponse) => {
                this.documentThumbnails = thumbResponse.records;
                this.isLoading = false;
                this.isLoadingThumb = false;
            });
    }

}
