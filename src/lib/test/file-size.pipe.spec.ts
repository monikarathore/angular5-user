import { FileSizePipe } from '../src/pipe/file-size.pipe';
describe('FileSizePipe', () => {
  let pipe: FileSizePipe;
  beforeEach(() => {
    pipe = new FileSizePipe();
  });
  it('should not do anything if infinity', () => {
    expect(pipe).toBeTruthy(NaN);
  });
  it('should return correct bytes format', () => {
    expect(pipe.transform(1024)).toEqual('1.00 KB');
    expect(pipe.transform(999.00)).toEqual('999.00 bytes');
  });
});
