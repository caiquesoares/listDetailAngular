import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addZeros'
})
export class AddZerosPipe implements PipeTransform {

  transform(value: number, type: string): any {
    let str = '' + value;
    while (str.length < 3) {
      str = '0' + str;
    }
    switch(type){
      case 'icon': return 'assets/src/img/icons/' + str + 'MS.png';
        break;
      case 'img': return 'assets/src/img/images/' + str + '.png';
        break;
      default: return 'assets/src/img/images/' + str + '.png';
    }
  }
}
