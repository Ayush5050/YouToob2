import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'typeFilter'})
export class TypeFilterPipe implements PipeTransform {
transform(value: any): boolean {
    // let newStr = ;
    if(typeof(value)=='number'){
        return true;
    }
    return false;
  }
}