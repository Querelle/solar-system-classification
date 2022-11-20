import { Component, ViewEncapsulation } from '@angular/core';
import { IAstros } from './interfaces/astro.interface';
import { AstroService } from './services/astro.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'ssc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    public astro$: Observable<IAstros> = this.astroService.astro();

    constructor(private astroService: AstroService) {}
}
