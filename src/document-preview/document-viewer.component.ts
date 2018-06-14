import {
  Component,
  Output,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Inject,
  SimpleChanges, NgZone, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
  @Input() public closeIcon: boolean;
  @Output() public close: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  public toggleExpandedState() {
    this.close.emit(true);
  }

}
