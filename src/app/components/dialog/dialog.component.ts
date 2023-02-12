import { Component, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { HostRefDirective, PrivateDialogService } from './directives/host-ref.directive';
import { DialogRef } from '@app/services/dialog/dialog-ref';

@Component({
    selector: 'ssc-dialog',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.scss'],
    providers: [
        {
            provide: 'ssc-private-dialog-service',
            useClass: PrivateDialogService,
        },
    ],
})
export class DialogComponent {
    public vc: ViewContainerRef | null = null;

    @ViewChild(HostRefDirective) private readonly host_wrapper!: HostRefDirective;

    constructor(
        private dialogRef: DialogRef,
        @Inject('ssc-private-dialog-service') private shared: PrivateDialogService,
    ) {
        shared.onContainerCreated((container: ViewContainerRef) => {
            this.vc = container;
            container.createComponent(dialogRef.childType!);
        });

        shared.onContainerDestroyed(() => {
            this.vc = null;
        });
    }

    public closeDialog() {
        this.dialogRef.close();
    }

    public doNotCloseDialog(event: MouseEvent) {
        event.stopPropagation();
    }
}
