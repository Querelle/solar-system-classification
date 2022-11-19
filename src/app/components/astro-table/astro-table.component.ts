import { Component, Input } from '@angular/core';
import { IAstro, IAstros } from '../../interfaces/astro.interface';

@Component({
    selector: 'ssc-astro-table',
    templateUrl: 'astro-table.component.html',
    styleUrls: ['astro-table.component.scss'],
})
export class AstroTableComponent {
    @Input() astros!: IAstros;

    public tracker(index: number, astro: IAstro): number {
        return astro.code;
    }
}
