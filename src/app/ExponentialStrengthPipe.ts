import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name:'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform{
transform(value: number, exponent: number):number {
    console.log('value'+value,'exponent'+exponent);
    let str = exponent.toString();
    let exp = parseFloat(str);
    exp = Number(exp);
    return Math.pow(value,isNaN(exp)?1:exp);
}
}