import { FileSizePipe } from '../src/pipe/file-size.pipe';
describe('FileSizePipe', () => {
  let pipe: FileSizePipe;
  beforeEach(() => {
    pipe = new FileSizePipe();
  });
  it('should not do anything if infinity', () => {
    expect(pipe).toBeTruthy(NaN);
  });
  it('FileSizePipe pipe should be instanciated', () => {
    expect(FileSizePipe).toBeDefined();
  });
  it('pipe.transform() tobetruthy', () => {
    expect(pipe.transform()).toBeTruthy();
  });
  it('should return nothing when there is no filesize', function () {
    expect(pipe.transform(' ')).toBe('-');
  });

  it('should round the filesize based on the configured precision', function () {
    const size = 1024 + 512;
    expect(pipe.transform(size)).toBe('1.50 kB');
    expect(pipe.transform(size, 2)).toBe('1.50 kB');
  });

  it('should recognize bytes', function () {
    expect(pipe.transform(1, 0)).toBe('1 bytes');
  });

  it('should recognize KiloBytes', function () {
    expect(pipe.transform(Math.pow(1024, 1), 0)).toBe('1 kB');
  });

  it('should recognize MegaBytes', function () {
    expect(pipe.transform(Math.pow(1024, 2), 0)).toBe('1 MB');
  });

  it('should recognize GigaBytes', function () {
    expect(pipe.transform(Math.pow(1024, 3), 0)).toBe('1 GB');
  });

  it('should recognize TeraBytes', function () {
    expect(pipe.transform(Math.pow(1024, 4), 0)).toBe('1 TB');
  });

  it('should recognize PetaBytes', function () {
    expect(pipe.transform(Math.pow(1024, 5), 0)).toBe('1 PB');
  });

});
