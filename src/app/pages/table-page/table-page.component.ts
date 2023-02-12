import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAstro, IAstros } from '@app/interfaces/astro.interface';
import { AstroService } from '@app/services/astro/astro.service';
import { DialogService } from '@app/services/dialog/dialog.service';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';

@Component({
    selector: 'ssc-table-page',
    templateUrl: 'table-page.component.html',
    styleUrls: ['table-page.component.scss'],
    providers: [DialogService],
})
export class TablePageComponent {
    public astro$: Observable<IAstros> = this.astroService.astro();

    constructor(private astroService: AstroService, private dialog: DialogService) {}

    openDialog() {
        const dialogRef = this.dialog.open(FormDialogComponent);

        dialogRef.afterClosed.subscribe((result) => {
            if (result) this.astroService.newAstro(<IAstro>result);
        });
    }
}
