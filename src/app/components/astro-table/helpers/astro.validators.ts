import { AbstractControl, ValidationErrors } from '@angular/forms';

export abstract class AstroValidators {
    public static requiredByRange(control: AbstractControl): ValidationErrors | null {
        const type = control.parent?.parent?.get('type')?.value;
        const delta = control.value;
        if (type === 'RANGE' && !delta) {
            return { required: true };
        }
        return null;
    }
}
