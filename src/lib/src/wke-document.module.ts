import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WkeDocumentViewComponent } from './wke-document-view/wke-document-view.component';
import { DocumentViewerService } from './services/wke-document.service';
import { SharedService } from './services/shared.service';
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
  providers: [SharedService, DocumentViewerService]
})
export class WkeDocumentModule { }
