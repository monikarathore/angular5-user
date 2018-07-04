import {
  Component, OnInit, OnDestroy, Output, EventEmitter, Input,
  SimpleChanges, ElementRef, ViewChild, Renderer2, OnChanges
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DocumentViewerService } from './document-viewer.service';
import { Result } from '../result.model';
import { Constants } from '../services/constants';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/skipWhile';
import { HttpClient } from '@angular/common/http';
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
  pagelimit = 6;
  offset = 0;
  public url;
  //documentThumbnails: any;
  private lastSelected: Result;
  totalCount: any;
  order: any = 'pageNumber';

  public documentThumbnails: Array<any> = [];
  public httpReqestInProgress: boolean = false;

  @Input() public closeIconVisibility: boolean;
  @Output() public documentClick = new EventEmitter<Result>();
  @Output() public close: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() public documentId: string;
  @Input() public query: string;
  @Input() public documentViewerServiceURL: string;
  @Input() public sToken: string;
  @Input() public slbAccountId: string;
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

  // public onScrollUp(): void {
  //   this.getNews(
  //     this.pagelimit,
  //     (documentThumbnails) => {
  //       this.documentThumbnails = this.documentThumbnails.concat(documentThumbnails);
  //     });
  //   // this.isLoadingThumb = true;
  //   // if (this.pagelimit <= this.totalCount) {
  //   //   this.pagelimit += 6;
  //   //   this.getDocumentTumb(this.pagelimit, this.offset);
  //   // } else {
  //   //   this.isLoadingThumb = false;
  //   // }
  // }

  public scrollDown(): void {
   // debugger;
    console.log(this.totalCount);
    this.isLoadingThumb = true;
    if (this.pagelimit <= this.totalCount) {
    //  this.pagelimit += 6;
      this.pagelimit += 6;
        this.offset += 6;
        this.getNews(
          this.pagelimit,
          this.offset,
          (documentThumbnails) => {
            this.documentThumbnails = this.documentThumbnails.concat(documentThumbnails);
            //this.documentThumbnails = documentThumbnails;
          });
      //this.getDocumentTumb(this.pagelimit, this.offset);


    } else {
      this.isLoadingThumb = false;
    }
  }
  public ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        if (propName === 'documentId') {
          this.getDocumentData();
          this.getNews(this.pagelimit, this.offset, (documentThumbnails) =>{ 
            this.documentThumbnails = documentThumbnails;
          });
        }
      }
    }
  }
  public getDocumentData() {
    this.documentViewerService.getDocumentViewerServiceForTotalPages(this.sToken, this.slbAccountId, this.documentId,
      this.documentViewerServiceURL).subscribe((document) => {
        this.errorMsg = false;
        this.wkeDocumentData = document;

        

        //this.getDocumentTumb(this.pagelimit, this.offset);
      }, error => {
        this.isLoading = false;
        this.errorMsg = true;

      });
  }
  /*
  public getDocumentTumb(limitPage, pageoffset) {
    this.documentViewerService.getDocumentThumbViewerService(this.sToken, this.slbAccountId, this.documentId,
      Constants.PAGE, this.pagelimit, this.offset, this.query, this.documentViewerServiceURL).subscribe((thumbResponse) => {
        this.documentThumbnails = thumbResponse.records;
        this.totalCount = thumbResponse.totalCount;
        this.isLoading = false;
        this.isLoadingThumb = false;
      });
  }
  */
  private getNews(limit, offst, saveResultsCallback: (documentThumbnails) => void) {
    debugger;
    return this.documentViewerService.getDocumentThumbViewerService(this.sToken, this.slbAccountId, this.documentId,
      Constants.PAGE, this.pagelimit = limit, this.offset, this.query, this.documentViewerServiceURL)
      .skipWhile(() => this.httpReqestInProgress)
      .do(() => { this.httpReqestInProgress = true; })
      .subscribe((documentThumbnails: any[]) => {
        //this.pagelimit++;
        this.totalCount = documentThumbnails.totalCount;
        saveResultsCallback(documentThumbnails.records);

        this.httpReqestInProgress = false;
        this.isLoading = false;
        this.isLoadingThumb = false;
      });
  }

}
