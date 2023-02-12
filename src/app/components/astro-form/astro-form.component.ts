import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IAstro, MeasurementType } from '@app/interfaces/astro.interface';
import { AstroValidators } from './helpers/astro.validators';

@Component({
    selector: 'ssc-astro-form',
    templateUrl: 'astro-form.component.html',
    styleUrls: ['astro-form.component.scss'],
})
export class AstroFormComponent {
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

    /*
     * FormArray that the HTML template loops to show discoverers fields (first and last name) */
    public discoverers: FormArray = this.astroForm.get('discoverers') as FormArray;

    /*
     * Template calls this method to push a new FormControl inside discoverers FormArray */
    public pushNewDiscoverer(): void {
        this.discoverers.push(
            new FormGroup({
                firstname: new FormControl(null, [Validators.required]),
                lastname: new FormControl(null, [Validators.required]),
            }),
        );
    }

    /*
     * Template calls this method to remove a new FormControl from discoverers FormArray */
    public removeDiscovererAtIndex(i: number): void {
        this.discoverers.removeAt(i);
    }

    /*
     * Return a new FormGroup inside parent form */
    public newMeasurement(): FormGroup {
        return new FormGroup<any>({
            type: new FormControl('', [Validators.required]),
            measurement: new FormGroup({
                value: new FormControl(null, [Validators.required, AstroValidators.isNumber]),
                delta: new FormControl(null, []),
            }),
        });
    }

    /*
     * Each time a measurement select changes its value, it resets Validators */
    public changed(node: string): void {
        let nodeRef = this.astroForm.get(`${node}`);
        nodeRef?.get(`measurement`)?.reset();
        if (nodeRef?.get('type')?.value === 'RANGE') {
            nodeRef?.get('measurement.delta')?.setValidators([AstroValidators.isNumber]);
            nodeRef?.get('measurement.delta')?.updateValueAndValidity();
        } else {
            nodeRef?.get('measurement.delta')?.clearValidators();
            nodeRef?.get('measurement.delta')?.updateValueAndValidity();
        }
    }

    public submit(): void {
        const date = new Date(this.astroForm.get('discovery_date')?.value);
        const discoverers = this.discoverers?.value.map(
            ({ firstname, lastname }: { firstname: string; lastname: string }): string => `${firstname} ${lastname}`,
        );
        const payload = Object.assign(this.astroForm.value, {
            discoverers,
            discovery_date: date.toISOString(),
        });

        this.submitted.emit(payload);
        this.astroForm.reset();
    }
}
