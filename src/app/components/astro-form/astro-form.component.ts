import { AfterContentChecked, Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IAstro, MeasurementType } from '../../interfaces/astro.interface';
import { AstroValidators } from './helpers/astro.validators';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'ssc-astro-form',
    templateUrl: 'astro-form.component.html',
    styleUrls: ['astro-form.component.scss'],
})
export class AstroFormComponent implements AfterContentChecked {
    @Output() submitted: EventEmitter<IAstro> = new EventEmitter<IAstro>();

    public astroMeasures = MeasurementType;
    public astroForm: FormGroup = new FormGroup({
        code: new FormControl(null, [Validators.required]),
        name: new FormControl(null, [Validators.required]),
        eq_diameter: this.newMeasurement(),
        albedo: this.newMeasurement(),
        av_sun_earth: this.newMeasurement(),
        discoverers: new FormArray([
            new FormGroup({
                firstname: new FormControl(null, [Validators.required]),
                lastname: new FormControl(null, [Validators.required]),
            }),
        ]),
        discovery_date: new FormControl(null, [Validators.required]),
    });
    public discoverers: FormArray = this.astroForm.get('discoverers') as FormArray;
    public invalidForm: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    public pushNewDiscoverer(): void {
        this.discoverers.push(
            new FormGroup({
                firstname: new FormControl(null, [Validators.required]),
                lastname: new FormControl(null, [Validators.required]),
            }),
        );
    }

    public removeDiscovererAtIndex(i: number): void {
        this.discoverers.removeAt(i);
    }

    public newMeasurement(): FormGroup {
        return new FormGroup<any>({
            type: new FormControl('', [Validators.required]),
            measurement: new FormGroup({
                value: new FormControl(null, [Validators.required, AstroValidators.isNumber]),
                delta: new FormControl(null, [AstroValidators.requiredByRange]),
            }),
        });
    }

    public changed(node: string): void {
        this.astroForm.get(node)?.get('measurement');
    }

    public submit(): void {
        const discoverers = this.astroForm
            .get('discoverers')
            ?.value.map(
                ({ firstname, lastname }: { firstname: string; lastname: string }): string =>
                    `${firstname} ${lastname}`,
            );
        const payload = Object.assign(this.astroForm.value, { discoverers: discoverers });

        this.submitted.emit(payload);
        this.astroForm.reset();
    }

    ngAfterContentChecked() {
        this.invalidForm.next(this.astroForm.invalid);
    }
}
