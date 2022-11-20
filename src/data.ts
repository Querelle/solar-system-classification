import { IAstros, MeasurementType } from './app/interfaces/astro.interface';

export const data: IAstros = [
    {
        code: 8965,
        name: 'Pluto',
        eq_diameter: {
            type: MeasurementType.RANGE,
            measurement: {
                value: 90000,
                delta: 100,
                unit: 'km',
            },
        },
        albedo: {
            type: MeasurementType.APPROXIMATION,
            measurement: {
                value: 90000,
                unit: 'km',
            },
        },
        av_sun_earth: {
            type: MeasurementType.RANGE,
            measurement: {
                value: 90000,
                delta: 100,
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
            type: MeasurementType.RANGE,
            measurement: {
                value: 90000,
                delta: 100,
                unit: 'km',
            },
        },
        albedo: {
            type: MeasurementType.RANGE,
            measurement: {
                value: 90000,
                delta: 100,
                unit: 'km',
            },
        },
        av_sun_earth: {
            type: MeasurementType.RANGE,
            measurement: {
                value: 90000,
                delta: 100,
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
                value: 90000,
                delta: 100,
                unit: 'km',
            },
        },
        albedo: {
            type: MeasurementType.RANGE,
            measurement: {
                value: 90000,
                delta: 100,
                unit: 'km',
            },
        },
        av_sun_earth: {
            type: MeasurementType.RANGE,
            measurement: {
                value: 90000,
                delta: 100,
                unit: 'km',
            },
        },
        discoverer: 'Patrizio Igino Massari De Lorenzi',
        discovery_date: '2022-07-21T23:22:00.000Z',
    },
];
