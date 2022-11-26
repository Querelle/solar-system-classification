import { AfterContentChecked, Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IAstro, MeasurementType } from '../../interfaces/astro.interface';
import { AstroValidators } from './helpers/astro.validators';

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
                delta: new FormControl(null, []),
            }),
        });
    }

    public changed(node: string): void {
        this.astroForm.get(`${node}.measurement`)?.reset();
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
        console.log(this.astroForm.get('av_sun_earth.measurement.type')?.value);
        if (this.astroForm.get('eq_diameter.type')?.value === 'RANGE') {
            this.astroForm.get('eq_diameter.measurement.delta')?.setValidators([AstroValidators.isNumber]);
            this.astroForm.get('eq_diameter.measurement.delta')?.updateValueAndValidity();
        }
        if (this.astroForm.get('albedo.type')?.value === 'RANGE') {
            this.astroForm.get('albedo.measurement.delta')?.setValidators([AstroValidators.isNumber]);
            this.astroForm.get('albedo.measurement.delta')?.updateValueAndValidity();
        }
        if (this.astroForm.get('av_sun_earth.type')?.value === 'RANGE') {
            this.astroForm.get('av_sun_earth.measurement.delta')?.setValidators([AstroValidators.isNumber]);
            this.astroForm.get('av_sun_earth.measurement.delta')?.updateValueAndValidity();
        }
    }
}
