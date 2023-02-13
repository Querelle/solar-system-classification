import { Component } from '@angular/core';
import { IAstro } from '@app/interfaces/astro.interface';
import { DialogRef } from '@app/services/dialog/dialog-ref';

@Component({
    selector: 'ssc-form-page',
    templateUrl: 'form-dialog.component.html',
    styleUrls: ['form-dialog.component.scss'],
})
export class FormDialogComponent {
    constructor(private dialogRef: DialogRef) {}

    public close(form: IAstro) {
        this.dialogRef.close(form);
    }
}
