import { AbstractControl, ValidationErrors } from '@angular/forms';

export abstract class AstroValidators {
    public static requiredByRange(control: AbstractControl): ValidationErrors | null {
        const type = control.parent?.parent?.get('type')?.value;
        const parsed = Number(control.value);
        if (type === 'RANGE' && !parsed && isNaN(parsed)) {
            return { not_a_number: true };
        }
        return null;
    }

    public static isNumber(control: AbstractControl): ValidationErrors | null {
        const parsed = Number(control.value);
        if (!!parsed && !isNaN(parsed)) {
            return null;
        } else return { not_a_number: true };
    }
}
