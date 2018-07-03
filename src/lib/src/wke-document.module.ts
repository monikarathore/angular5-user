import { NgModule, ModuleWithProviders, Optional, SkipSelf, Provider } from '@angular/core';
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
import { SearchListConfigLoader, DefaultConfigLoader, WidgetConfig, WIDGET_CONFIG } from './services/config-loader.service';

export interface SearchListingModuleConfig {
  loader?: Provider;
  options?: WidgetConfig;
}

export const defaultOptions = {
  url: 'https://cmz-document-query-dot-dtw-migration-sandbox.appspot.com/_ah/api/unstructuredQuery/v1/document',
  clientid: 'discover-evt-csp-slb-com-dtwcmz.slbapp.com'
};
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
export class WkeDocumentModule {
  static forRoot(config?: SearchListingModuleConfig): ModuleWithProviders {
    // User config get logged here
    console.log(config);
    return {
      ngModule: WkeDocumentModule,
      providers: [SharedService, DocumentViewerService , {provide: SearchListConfigLoader, useClass: DefaultConfigLoader}]
    };
  }

  constructor (@Optional() @SkipSelf() parentModule: WkeDocumentModule) {
    if (parentModule) {
      console.log("error");
      throw new Error(
        'document wke widget is already loaded. Import it in the AppModule only');
    }
  }

}
