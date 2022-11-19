export interface IAstro {
    code: number;
    name: string;
    eq_diameter: number;
    albedo: number;
    av_sun_earth: number;
    discoverer: string | string[];
    discovery_date: string;
}

export type IAstros = IAstro[];
