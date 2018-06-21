import { WkeDocumentModule } from '../src/wke-document.module';

describe('DocumentPreviewModule', () => {
  let documentPreviewModule: WkeDocumentModule;

  beforeEach(() => {
    documentPreviewModule = new WkeDocumentModule();
  });

  it('should create an instance', () => {
    expect(documentPreviewModule).toBeTruthy();
  });
});
