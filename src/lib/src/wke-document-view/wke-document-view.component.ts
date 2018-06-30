import {
  Component, OnInit, OnDestroy, Output, EventEmitter, Input,
  SimpleChanges, ElementRef, ViewChild, Renderer2, OnChanges
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DocumentViewerService } from './document-viewer.service';
import { Result } from '../result.model';
import { Constants } from '../services/constants';
@Component({
  selector: 'wke-document-view',
  templateUrl: './wke-document-view.component.html',
  styleUrls: ['./wke-document-view.component.scss']
})
export class WkeDocumentViewComponent implements OnInit, OnChanges {
  wkeDocumentData: any;
  isLoading = true;
  isLoadingThumb = true;
  errorMsg: boolean;
  pagelimit: number;
  offset = 0;
  public url;
  orignalArrayThumbnail: any;
  documentThumbnails: any;
  private lastSelected: Result;
  totalCount: any;
  @Input() public closeIconVisibility: boolean;
  @Output() public documentClick = new EventEmitter<Result>();
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
  private selectDocument(thumb: Result) {
    if (this.lastSelected) {
      this.lastSelected.isSelected = false;
    }
    thumb.isSelected = true;
    this.lastSelected = thumb;
  }
  public singleClickDocument(thumb: any) {
    thumb.isSelected = false;
    this.selectDocument(thumb);
    this.documentClick.emit(thumb);
  }
  public scrollDown() {
    this.pagelimit = 6;
    this.isLoadingThumb = true;
    if (this.orignalArrayThumbnail.length >= this.documentThumbnails.length) {
      
      let len = this.documentThumbnails.length;
      for (let i = len; i <= len; i++) {
        this.documentThumbnails.push(this.orignalArrayThumbnail[i]);
        this.isLoadingThumb = false;
      }
    }
    // this.isLoadingThumb = true;
    // if (this.pagelimit <= this.totalCount) {
    //   this.pagelimit += 6;
    //   this.getDocumentTumb();
    // } else {
    //   this.isLoadingThumb = false;
    // }
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
        this.errorMsg = false;
        this.wkeDocumentData = document;
        this.pagelimit = document.totalPages;
        this.getDocumentTumb(this.pagelimit);
      }, error => {
        this.isLoading = false;
        this.errorMsg = true;

      });
  }
  public getDocumentTumb(limit) {
    this.documentViewerService.getDocumentThumbViewerService(this.sToken, this.clientId, this.documentId,
      Constants.PAGE, this.pagelimit, this.offset, this.query, this.documentViewerServiceURL).subscribe((thumbResponse) => {
        this.orignalArrayThumbnail = thumbResponse.records;
        this.documentThumbnails = thumbResponse.records.slice(0, 6);
        this.totalCount = thumbResponse.totalCount;
        this.isLoading = false;
        this.isLoadingThumb = false;
      });
  }

}
