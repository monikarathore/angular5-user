import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DocumentPreviewModule } from '../document-preview/document-preview.module';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [DocumentPreviewModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should call closeDocView`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.closeDocView();
    expect(fixture.componentInstance.showDocViewer).toBe(false);
  }));
  it(`should call toggleDocViewer`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.toggleDocViewer();
    expect(fixture.componentInstance.showDocViewer).toBe(true);
  }));

});
