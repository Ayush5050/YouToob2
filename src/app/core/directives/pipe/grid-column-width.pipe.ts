import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gridColumnWidth'
})
export class GridColumnWidthPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value=='User Name' || value=='Manager Name') return true;
    return false;
  }

}
