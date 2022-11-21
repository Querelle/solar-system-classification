export interface IAstro {
    code: number;
    name: string;
    eq_diameter: IAstroMeasurement;
    albedo: IAstroMeasurement;
    av_sun_earth: IAstroMeasurement;
    discoverers: string | string[];
    discovery_date: string;
}

export type IAstros = IAstro[];

export type IAstroMeasurement =
    | {
          type: MeasurementType.MEAN | MeasurementType.APPROXIMATION;
          measurement: {
              value: number;
              unit: string;
          };
      }
    | {
          type: MeasurementType.RANGE;
          measurement: {
              value: number;
              delta: number;
              unit: string;
          };
      };

export enum MeasurementType {
    MEAN = 'MEAN',
    APPROXIMATION = 'APPROXIMATION',
    RANGE = 'RANGE',
}
