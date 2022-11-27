import { AstroFormComponent } from './astro-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseButtonComponent } from '../base-button/base-button.component';
import { BasicLinkComponent } from '../basic-link/basic-link.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AstroFormComponent', () => {
    let fixture: ComponentFixture<AstroFormComponent>;
    let component: AstroFormComponent;
    let de: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AstroFormComponent, BaseButtonComponent, BasicLinkComponent],
            imports: [FormsModule, ReactiveFormsModule, RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AstroFormComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    });

    it('should  CREATE the COMPONENT', function () {
        expect(component).toBeTruthy();
    });

    it('VALUES should be NUMBERS', () => {
        const stringVl: string = '8p0';
        const numberVl: number = 80.5;

        const eq_diameter_value = component.astroForm.get('eq_diameter.measurement.value');
        const albedo_value = component.astroForm.get('albedo.measurement.value');
        const av_sun_earth_value = component.astroForm.get('av_sun_earth.measurement.value');

        eq_diameter_value?.setValue(numberVl);
        expect(component.astroForm.get('eq_diameter.measurement.value')?.hasError('not_a_number')).toBeFalse();
        albedo_value?.setValue(numberVl);
        expect(component.astroForm.get('albedo.measurement.value')?.hasError('not_a_number')).toBeFalse();
        av_sun_earth_value?.setValue(numberVl);
        expect(component.astroForm.get('av_sun_earth.measurement.value')?.hasError('not_a_number')).toBeFalse();

        eq_diameter_value?.setValue(stringVl);
        expect(component.astroForm.get('eq_diameter.measurement.value')?.hasError('not_a_number')).toBeTrue();
        albedo_value?.setValue(stringVl);
        expect(component.astroForm.get('albedo.measurement.value')?.hasError('not_a_number')).toBeTrue();
        av_sun_earth_value?.setValue(stringVl);
        expect(component.astroForm.get('av_sun_earth.measurement.value')?.hasError('not_a_number')).toBeTrue();
    });

    it('DELTAS should be REQUIRED and NUMBERS when measurement TYPE = "RANGE"', () => {
        const stringVl: string = '8p0';
        const numberVl: number = 80.5;

        const eq_diameter_delta = component.astroForm.get('eq_diameter.measurement.delta');
        const albedo_delta = component.astroForm.get('albedo.measurement.delta');
        const av_sun_earth_delta = component.astroForm.get('av_sun_earth.measurement.delta');

        component.astroForm.get('eq_diameter.type')?.setValue('RANGE');
        component.astroForm.get('albedo.type')?.setValue('RANGE');
        component.astroForm.get('av_sun_earth.type')?.setValue('RANGE');
        component.ngAfterContentChecked();

        eq_diameter_delta?.setValue(numberVl);
        expect(component.astroForm.get('eq_diameter.measurement.delta')?.hasError('not_a_number')).toBeFalse();
        albedo_delta?.setValue(numberVl);
        expect(component.astroForm.get('albedo.measurement.delta')?.hasError('not_a_number')).toBeFalse();
        av_sun_earth_delta?.setValue(numberVl);
        expect(component.astroForm.get('av_sun_earth.measurement.delta')?.hasError('not_a_number')).toBeFalse();

        eq_diameter_delta?.setValue(stringVl);
        expect(component.astroForm.get('eq_diameter.measurement.delta')?.hasError('not_a_number')).toBeTrue();
        albedo_delta?.setValue(stringVl);
        expect(component.astroForm.get('albedo.measurement.delta')?.hasError('not_a_number')).toBeTrue();
        av_sun_earth_delta?.setValue(stringVl);
        expect(component.astroForm.get('av_sun_earth.measurement.delta')?.hasError('not_a_number')).toBeTrue();
    });

    it('VALUES should NOT BE ZERO or NULL', () => {
        const zeroVl: string = '0';

        const eq_diameter_value = component.astroForm.get('eq_diameter.measurement.value');
        const albedo_value = component.astroForm.get('albedo.measurement.value');
        const av_sun_earth_value = component.astroForm.get('av_sun_earth.measurement.value');

        eq_diameter_value?.setValue(zeroVl);
        expect(component.astroForm.get('eq_diameter.measurement.value')?.hasError('not_a_number')).toBeTrue();
        albedo_value?.setValue(zeroVl);
        expect(component.astroForm.get('albedo.measurement.value')?.hasError('not_a_number')).toBeTrue();
        av_sun_earth_value?.setValue(zeroVl);
        expect(component.astroForm.get('av_sun_earth.measurement.value')?.hasError('not_a_number')).toBeTrue();

        eq_diameter_value?.setValue(null);
        expect(component.astroForm.get('eq_diameter.measurement.value')?.hasError('not_a_number')).toBeTrue();
        albedo_value?.setValue(null);
        expect(component.astroForm.get('albedo.measurement.value')?.hasError('not_a_number')).toBeTrue();
        av_sun_earth_value?.setValue(null);
        expect(component.astroForm.get('av_sun_earth.measurement.value')?.hasError('not_a_number')).toBeTrue();
    });

    it('DELTAS should NOT BE ZERO or NULL when measurement TYPE = "RANGE"', () => {
        const zeroVl: string = '0';

        const eq_diameter_delta = component.astroForm.get('eq_diameter.measurement.delta');
        const albedo_delta = component.astroForm.get('albedo.measurement.delta');
        const av_sun_earth_delta = component.astroForm.get('av_sun_earth.measurement.delta');

        component.astroForm.get('eq_diameter.type')?.setValue('RANGE');
        component.astroForm.get('albedo.type')?.setValue('RANGE');
        component.astroForm.get('av_sun_earth.type')?.setValue('RANGE');
        component.ngAfterContentChecked();

        eq_diameter_delta?.setValue(zeroVl);
        expect(component.astroForm.get('eq_diameter.measurement.delta')?.hasError('not_a_number')).toBeTrue();
        albedo_delta?.setValue(zeroVl);
        expect(component.astroForm.get('albedo.measurement.delta')?.hasError('not_a_number')).toBeTrue();
        av_sun_earth_delta?.setValue(zeroVl);
        expect(component.astroForm.get('av_sun_earth.measurement.delta')?.hasError('not_a_number')).toBeTrue();

        eq_diameter_delta?.setValue(null);
        expect(component.astroForm.get('eq_diameter.measurement.delta')?.hasError('not_a_number')).toBeTrue();
        albedo_delta?.setValue(null);
        expect(component.astroForm.get('albedo.measurement.delta')?.hasError('not_a_number')).toBeTrue();
        av_sun_earth_delta?.setValue(null);
        expect(component.astroForm.get('av_sun_earth.measurement.delta')?.hasError('not_a_number')).toBeTrue();
    });
});
