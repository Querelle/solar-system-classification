import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MeasurementType } from '../../interfaces/astro.interface';
import { AstroValidators } from '../astro-table/helpers/astro.validators';

@Component({
    selector: 'ssc-astro-form',
    templateUrl: 'astro-form.component.html',
    styleUrls: ['astro-form.component.scss'],
    providers: [AstroValidators],
})
export class AstroFormComponent {
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

    constructor(private astroValidator: AstroValidators) {}

    public pushNewDiscoverer() {
        this.discoverers.push(
            new FormGroup({
                firstname: new FormControl(null, [Validators.required]),
                lastname: new FormControl(null, [Validators.required]),
            }),
        );
    }

    public removeDiscovererAtIndex(i: number) {
        this.discoverers.removeAt(i);
    }

    public newMeasurement(): FormGroup {
        return new FormGroup<any>({
            type: new FormControl(null, [Validators.required]),
            measurement: new FormGroup({
                value: new FormControl(null, [Validators.required]),
                delta: new FormControl(null, [this.astroValidator.requiredByRange]),
                unit: new FormControl(null, []),
            }),
        });
    }

    public submit() {
        console.log(this.astroForm.value);
    }
}
