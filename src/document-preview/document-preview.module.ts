import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentViewerComponent } from './document-viewer.component';
import { FileSizePipe } from './shared/pipe/file-size.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DocumentViewerComponent, FileSizePipe],
  exports: [DocumentViewerComponent],
})
export class DocumentPreviewModule { }
