import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class AstroValidators {
    public requiredByRange(control: AbstractControl): ValidationErrors | null {
        const type = control.parent?.parent?.get('type')?.value;
        const delta = control.value;
        if (type === 'RANGE' && !delta) {
            return { required: true };
        }
        return null;
    }
}
