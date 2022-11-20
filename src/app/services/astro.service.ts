import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { IAstros } from '../interfaces/astro.interface';
import { data } from '../../data';

@Injectable({
    providedIn: 'root',
})
export class AstroService {
    constructor(private http: HttpClient) {}

    public astro(): Observable<IAstros> {
        return new Observable<IAstros>((subscriber: Subscriber<IAstros>) => subscriber.next(data));
    }
}
