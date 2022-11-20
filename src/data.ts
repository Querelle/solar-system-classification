import { IAstros, MeasurementType } from './app/interfaces/astro.interface';

export const data: IAstros = [
    {
        code: 8965,
        name: 'Pluto',
        eq_diameter: {
            type: MeasurementType.RANGE,
            measurement: {
                value: 45453,
                delta: 45,
                unit: 'km',
            },
        },
        albedo: {
            type: MeasurementType.APPROXIMATION,
            measurement: {
                value: 90700,
                unit: 'km',
            },
        },
        av_sun_earth: {
            type: MeasurementType.MEAN,
            measurement: {
                value: 9985,
                unit: 'km',
            },
        },
        discoverer: ['Patrizio Igino', 'Alberto Albionte'],
        discovery_date: '2022-11-01T17:41:44+00:00',
    },
    {
        code: 86532,
        name: 'Mars',
        eq_diameter: {
            type: MeasurementType.MEAN,
            measurement: {
                value: 8000,
                unit: 'km',
            },
        },
        albedo: {
            type: MeasurementType.RANGE,
            measurement: {
                value: 790000,
                delta: 236,
                unit: 'km',
            },
        },
        av_sun_earth: {
            type: MeasurementType.APPROXIMATION,
            measurement: {
                value: 955.89,
                unit: 'km',
            },
        },
        discoverer: 'Patrizio Igino',
        discovery_date: '2042-07-22T00:08:10.000Z',
    },
    {
        code: 86532,
        name: 'Venus',
        eq_diameter: {
            type: MeasurementType.RANGE,
            measurement: {
                value: 6000,
                delta: 100,
                unit: 'km',
            },
        },
        albedo: {
            type: MeasurementType.RANGE,
            measurement: {
                value: 5300,
                delta: 10,
                unit: 'km',
            },
        },
        av_sun_earth: {
            type: MeasurementType.RANGE,
            measurement: {
                value: 78000,
                delta: 100,
                unit: 'km',
            },
        },
        discoverer: 'Patrizio Igino Massari De Lorenzi',
        discovery_date: '2022-07-21T23:22:00.000Z',
    },
];
