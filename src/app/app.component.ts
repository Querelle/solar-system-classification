import { Component, ViewEncapsulation } from '@angular/core';
import { IAstros } from './interfaces/astro.interface';
import { data } from '../data';

@Component({
    selector: 'ssc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    public astros: IAstros = data;
}
