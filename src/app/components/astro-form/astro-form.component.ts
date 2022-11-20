import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MeasurementType } from '../../interfaces/astro.interface';
import { AstroValidators } from '../astro-table/helpers/astro.validators';

@Component({
    selector: 'ssc-astro-form',
    templateUrl: 'astro-form.component.html',
    styleUrls: ['astro-form.component.scss'],
    providers: [AstroValidators],
})
export class AstroFormComponent implements OnInit {
    public astroMeasures = MeasurementType;
    public astroForm: FormGroup = new FormGroup({
        code: new FormControl(null, [Validators.required]),
        name: new FormControl(null, [Validators.required]),
        eq_diameter: this.newMeasurement(),
        albedo: this.newMeasurement(),
        av_sun_earth: this.newMeasurement(),
        discoverer: new FormControl(null, [Validators.required]),
        discovery_date: new FormControl(null, [Validators.required]),
    });

    constructor(private astroValidator: AstroValidators) {}

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

    ngOnInit() {
        console.log(this.astroForm.dirty);
        this.astroForm.valueChanges.subscribe({
            next: (form) => {
                console.log(this.astroForm.dirty);
                /*console.log('%c ==>> Validation Errors: ', 'color: red; font-weight: bold; font-size:25px;');
				console.log(form);

				let totalErrors = 0;

				Object.keys(this.astroForm.controls).forEach((key) => {
					const controlErrors: ValidationErrors | null = this.astroForm.get(key)!.errors;
					if (controlErrors != null) {
						totalErrors++;
						Object.keys(controlErrors).forEach((keyError) => {
							console.log(
								'Key control: ' + key + ', keyError: ' + keyError + ', err value: ',
								controlErrors[keyError],
							);
						});
					}
				});

				console.log('Number of errors: ', totalErrors);*/
            },
        });
    }
}
