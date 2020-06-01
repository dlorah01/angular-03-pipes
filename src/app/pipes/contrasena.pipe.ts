import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activado: boolean = true): string {
  	if(activado) {
  		value = value.replace(/./g,"*");
  	}
    return value;
    console.log(value);
  }

}
