import { Pipe, PipeTransform } from '@angular/core';
import { IAstroMeasurement } from '../interfaces/astro.interface';

@Pipe({ name: 'measurementRender' })
export class MeasurementRenderPipe implements PipeTransform {
    transform(value: IAstroMeasurement): number | string {
        let type: string = value.type;
        if (type === 'MEAN') {
            return value.measurement.value;
        } else if (type === 'APPROXIMATION') {
            return `~${value.measurement.value}`;
        } else if (type === 'RANGE') {
            let measure = <{ value: number; delta: number; unit: string }>value.measurement;
            return `${value.measurement.value} ± ${measure.delta}`;
        }

        return '';
    }
}
