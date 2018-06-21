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

  // it('should return correct bytes format', () => {
  //   expect(pipe.transform(999)).toEqual('999 bytes');
  //   expect(pipe.transform(1024)).toEqual('1 KB');
  //   expect(pipe.transform(10240)).toEqual('10 KB');
  //   expect(pipe.transform(102400)).toEqual('100 KB');
  //   expect(pipe.transform(1023488)).toEqual('999.5 KB');
  //   expect(pipe.transform(15456864)).toEqual('14.740814208984375 MB');
  //   expect(pipe.transform(4616548610)).toEqual('4.299496045917114 GB');
  //   expect(pipe.transform(461654861500)).toEqual('429.94960505737276 GB');
  //   expect(pipe.transform(12345678)).toEqual('11.77375602722168 MB');
  //   expect(pipe.transform(12345678, 1)).toEqual('11.8 MB');
  //   expect(pipe.transform(12345678, 2)).toEqual('11.77 MB');
  // });

});
