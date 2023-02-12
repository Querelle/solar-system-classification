import { Component, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogContainerService, HostRefDirective } from './directives/host-ref.directive';
import { DialogRef } from '@app/services/dialog/dialog-ref';

@Component({
    selector: 'ssc-dialog',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.scss'],
    providers: [
        {
            provide: 'dialog-container-service',
            useClass: DialogContainerService,
        },
    ],
})
export class DialogComponent {
    public vc: ViewContainerRef | null = null;

    @ViewChild(HostRefDirective) private readonly host_wrapper!: HostRefDirective;

    constructor(
        private dialogRef: DialogRef,
        @Inject('dialog-container-service') private shared: DialogContainerService,
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
