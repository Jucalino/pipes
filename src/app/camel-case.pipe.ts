import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
})
export class CamelCasePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    let values = value.split(' ');
    let resultado = '';

    for (let v of values) {
      resultado += this.capitalize(v) + ' ';
    }

    return resultado;
  }

 capitalize(text: string) {
    let firstChar = text.slice(0, 1).toLocaleUpperCase();
    let restChar = text.slice(1, text.length).toLocaleLowerCase();
    return firstChar + restChar;
  }

}
