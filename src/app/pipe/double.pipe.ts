import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double'
})
export class DoublePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args){
      args=0;
    }

    return value+args;
  }

}
