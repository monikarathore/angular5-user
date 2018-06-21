import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentViewerService } from '../src/services/wke-document.service';
import { SharedService } from '../src/services/shared.service';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of';
import { LoadingSpinnerModule } from '@slb-angular/dls-components';
import { WkeDocumentViewComponent } from '../src/wke-document-view/wke-document-view.component';
import { FileSizePipe } from '../src/pipe/file-size.pipe';

describe('WkeDocumentViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WkeDocumentViewComponent, FileSizePipe],
      imports: []
    })
      .compileComponents();

  }));

});
