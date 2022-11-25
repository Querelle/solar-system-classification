import { IAstros, MeasurementType } from './app/interfaces/astro.interface';

export const data: IAstros = [
    {
        code: 134340,
        name: 'Plutone',
        eq_diameter: {
            type: MeasurementType.RANGE,
            measurement: {
                value: 2306,
                delta: 20,
                unit: 'km',
            },
        },
        albedo: {
            type: MeasurementType.MEAN,
            measurement: {
                value: 0.575,
                unit: '',
            },
        },
        av_sun_earth: {
            type: MeasurementType.MEAN,
            measurement: {
                value: 39.4,
                unit: 'ua',
            },
        },
        discoverers: ['Clyde Tombaugh'],
        discovery_date: '1930-01-01T00:00:00+00:00',
    },
    {
        code: 136472,
        name: 'Makemake',
        eq_diameter: {
            type: MeasurementType.RANGE,
            measurement: {
                value: 1800,
                delta: 20,
                unit: 'km',
            },
        },
        albedo: {
            type: MeasurementType.RANGE,
            measurement: {
                value: 0.8,
                delta: 0.2,
                unit: '',
            },
        },
        av_sun_earth: {
            type: MeasurementType.MEAN,
            measurement: {
                value: 45.7,
                unit: 'au',
            },
        },
        discoverers: ['C. Trujillo', 'M. Brown', 'D. Rabinowitz'],
        discovery_date: '2005-01-01T00:00:00+00:00',
    },
    {
        code: 136108,
        name: 'Haumea',
        eq_diameter: {
            type: MeasurementType.APPROXIMATION,
            measurement: {
                value: 1500,
                unit: 'km',
            },
        },
        albedo: {
            type: MeasurementType.APPROXIMATION,
            measurement: {
                value: 0.6,
                unit: '',
            },
        },
        av_sun_earth: {
            type: MeasurementType.MEAN,
            measurement: {
                value: 43.3,
                unit: 'ua',
            },
        },
        discoverers: ['C. Trujillo', 'M. Brown', 'D. Rabinowitz'],
        discovery_date: '2005-01-01T00:00:00+00:00',
    },
    {
        code: 90482,
        name: 'Orcus',
        eq_diameter: {
            type: MeasurementType.APPROXIMATION,
            measurement: {
                value: 1500,
                unit: 'km',
            },
        },
        albedo: {
            type: MeasurementType.APPROXIMATION,
            measurement: {
                value: 0.1,
                unit: '',
            },
        },
        av_sun_earth: {
            type: MeasurementType.MEAN,
            measurement: {
                value: 39.4,
                unit: 'km',
            },
        },
        discoverers: ['C. Trujillo', 'M. Brown', 'D. Rabinowitz'],
        discovery_date: '2004-01-01T00:00:00+00:00',
    },
];
