import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ssc-base-button',
    templateUrl: 'base-button.component.html',
    styleUrls: ['base-button.component.scss'],
})
export class BaseButtonComponent {
    @Input() icon!: string;
    @Input() label!: string;
    @Input() disabled_btn!: boolean;
    @Input() type: string = 'button';

    @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

    public whenClicked(): void {
        this.clicked.emit();
    }
}
