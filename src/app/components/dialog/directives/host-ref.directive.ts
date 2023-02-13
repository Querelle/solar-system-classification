import { Directive, Inject, Injectable, ViewContainerRef } from '@angular/core';

@Injectable()
export class DialogContainerService {
    private createListeners: ((a: ViewContainerRef) => void)[] = [];
    private destroyListeners: ((a: ViewContainerRef) => void)[] = [];

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
    constructor(public containerViewRef: ViewContainerRef, @Inject('dialog-container-service') private shared: any) {
        shared.registerContainer(containerViewRef);
    }
}
