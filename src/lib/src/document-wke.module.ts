import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WkeDocumentViewComponent } from './wke-document-view/wke-document-view.component';
import { FileSizePipe } from './pipe/file-size.pipe';
import { LoadingSpinnerModule } from '@slb-angular/dls-components';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    LoadingSpinnerModule,
    InfiniteScrollModule
  ],
  declarations: [WkeDocumentViewComponent, FileSizePipe],
  exports: [WkeDocumentViewComponent],
})
export class DocumentPreviewModule { }
