import { DocumentPreviewModule } from './document-preview.module';

describe('DocumentPreviewModule', () => {
  let documentPreviewModule: DocumentPreviewModule;

  beforeEach(() => {
    documentPreviewModule = new DocumentPreviewModule();
  });

  it('should create an instance', () => {
    expect(documentPreviewModule).toBeTruthy();
  });
});
