import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WkeDocumentViewComponent } from './wke-document-view/wke-document-view.component';
import { DocumentViewerService } from './wke-document-view/document-viewer.service';
import { SharedService } from './services/shared.service';
import { FileSizePipe } from './pipe/file-size.pipe';
import { LoadingSpinnerModule } from '@slb-angular/dls-components';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  imports: [
    CommonModule,
    LoadingSpinnerModule,
    InfiniteScrollModule,
    OrderModule
  ],
  declarations: [WkeDocumentViewComponent, FileSizePipe],
  exports: [WkeDocumentViewComponent],
  providers: [SharedService, DocumentViewerService]
})
export class WkeDocumentModule { }
