import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {
  private units = [
    'bytes',
    'KB',
    'MB',
    'GB',
    'TB',
    'PB'
  ];
  transform(bytes: any = 0, precision: any = 2): string | number {
    if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) { return '-' };
    // if (typeof precision === 'undefined') { precision = 1 };
    const units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
      number = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + ' ' + units[number];
  }
}
