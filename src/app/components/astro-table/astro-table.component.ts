import { Component, Input } from '@angular/core';
import { IAstro, IAstros } from '../../interfaces/astro.interface';
import { Observable } from 'rxjs';

@Component({
    selector: 'ssc-astro-table',
    templateUrl: 'astro-table.component.html',
    styleUrls: ['astro-table.component.scss'],
})
export class AstroTableComponent {
    @Input() astro$!: Observable<IAstros>;

    public tracker(index: number, astro: IAstro): number {
        return astro.code;
    }
}
