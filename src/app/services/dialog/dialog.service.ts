import { Injectable, Injector, StaticProvider, Type, ViewContainerRef } from '@angular/core';
import { DialogComponent } from '@app/components/dialog/dialog.component';
import { DialogRef } from './dialog-ref';
import { tap } from 'rxjs';

export class DialogData {
    data: unknown;
}

@Injectable()
export class DialogService {
    constructor(private containerViewRef: ViewContainerRef, private injector: Injector) {}

    public open(component: Type<any>, options?: DialogData) {
        const dialogData = new DialogData();
        dialogData.data = options;

        const dialogRef = new DialogRef();
        dialogRef.childType = component;

        const injectorOptions: { providers: StaticProvider[]; parent: Injector } = {
            providers: [
                { provide: DialogData, useValue: dialogData },
                { provide: DialogRef, useValue: dialogRef },
            ],
            parent: this.injector,
        };

        const containerRef = this.containerViewRef.createComponent(DialogComponent, {
            injector: Injector.create(injectorOptions),
        });

        dialogRef.afterClosed
            .pipe(
                tap({
                    next: () => containerRef.destroy(),
                    complete: () => console.log('Dialog closed: operation complete!'),
                }),
            )
            .subscribe();

        return dialogRef;
    }
}
