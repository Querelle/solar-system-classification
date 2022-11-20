import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';
import { MeasurementType } from '../../../interfaces/astro.interface';

@Injectable()
export class AstroValidators {
    public checkMeasurement(measurement: AbstractControl): ValidationErrors | null {
        let measure = measurement.get('measurement')?.value;
        let type = measurement.get('type')?.value;

        if (Object.keys(MeasurementType).includes(type)) {
            if (['APPROXIMATION', 'MEAN'].includes(type)) {
                if (!measure.value) return { required: true };
                else return null;
            } else if (['RANGE'].includes(type)) {
                if (!measure.value || !measure.delta) return { required: true };
                else return null;
            }
        }
        return { required: true };
    }
}
