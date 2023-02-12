import { Directive, Inject, ViewContainerRef } from '@angular/core';

export class PrivateDialogService {
    createListeners: any[] = [];
    destroyListeners: any[] = [];

    onContainerCreated(fn: (a: ViewContainerRef) => void) {
        this.createListeners.push(fn);
    }

    onContainerDestroyed(fn: (a: ViewContainerRef) => void) {
        this.destroyListeners.push(fn);
    }

    registerContainer(container: ViewContainerRef) {
        this.createListeners.forEach((fn: (a: ViewContainerRef) => void) => {
            fn(container);
        });
    }

    destroyContainer(container: ViewContainerRef) {
        this.destroyListeners.forEach((fn: (a: ViewContainerRef) => void) => {
            fn(container);
        });
    }
}

@Directive({
    selector: '[sscHostWrapper]',
})
export class HostRefDirective {
    constructor(public containerViewRef: ViewContainerRef, @Inject('ssc-private-dialog-service') private shared: any) {
        shared.registerContainer(containerViewRef);
    }
}
