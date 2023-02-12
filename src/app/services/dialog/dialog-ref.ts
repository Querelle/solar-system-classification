import { Observable, Subject } from 'rxjs';
import { Type } from '@angular/core';

export class DialogRef {
    /*
     * Dialog content: displayed inside dialog card */
    public childType: Type<any> | null = null;
    private _afterClosed: Subject<unknown> = new Subject<unknown>();
    public afterClosed: Observable<unknown> = this._afterClosed.asObservable();

    public close(result?: unknown) {
        this._afterClosed.next(result);
        this._afterClosed.complete();
    }
}
