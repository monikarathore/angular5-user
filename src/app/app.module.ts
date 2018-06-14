import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DocumentPreviewModule } from '../document-preview/document-preview.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DocumentPreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
