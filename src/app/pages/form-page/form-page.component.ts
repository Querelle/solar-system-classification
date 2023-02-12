import { Component } from '@angular/core';
import { AstroService } from '@app/services/astro/astro.service';
import { IAstro } from '@app/interfaces/astro.interface';

@Component({
    selector: 'ssc-form-page',
    templateUrl: 'form-page.component.html',
    styleUrls: ['form-page.component.scss'],
})
export class FormPageComponent {
    constructor(private astroService: AstroService) {}

    newAstro(astro: IAstro) {
        this.astroService.newAstro(astro);
    }
}
