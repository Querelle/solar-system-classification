import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAstros } from '../../interfaces/astro.interface';
import { AstroService } from '../../services/astro.service';

@Component({
    selector: 'ssc-table-page',
    templateUrl: 'table-page.component.html',
    styleUrls: [],
})
export class TablePageComponent {
    public astro$: Observable<IAstros> = this.astroService.astro();

    constructor(private astroService: AstroService) {}
}
