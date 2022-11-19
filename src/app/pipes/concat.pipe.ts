import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'concatPipe' })
export class ConcatPipe implements PipeTransform {
    transform(value: any): any {
        if (Array.isArray(value)) return value.join(', ');
        else return value;
    }
}
