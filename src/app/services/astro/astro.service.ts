import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { data } from '../../../data';
import { IAstro, IAstros } from '@app/interfaces/astro.interface';

@Injectable({
    providedIn: 'root',
})
export class AstroService {
    private astros: IAstros = data;

    constructor(private http: HttpClient) {}

    public astro(): Observable<IAstros> {
        return new Observable<IAstros>((subscriber: Subscriber<IAstros>) => subscriber.next(this.astros));
    }

    public newAstro(astro: IAstro) {
        this.astros.push(astro);
    }
}
