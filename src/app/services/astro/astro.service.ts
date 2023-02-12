import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { data } from '../../../data';
import { IAstro, IAstros } from '@app/interfaces/astro.interface';

@Injectable({
    providedIn: 'root',
})
export class AstroService {
    private astros: IAstros = data;
    private astros$$: BehaviorSubject<IAstros> = new BehaviorSubject<IAstros>(data);
    public astro$: Observable<IAstros> = this.astros$$.asObservable();

    constructor(private http: HttpClient) {}

    public newAstro(astro: IAstro) {
        this.astros.push(astro);
        this.astros$$.next(this.astros);
    }
}
