import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ssc-base-button',
    templateUrl: 'base-button.component.html',
    styleUrls: ['base-button.component.scss'],
})
export class BaseButtonComponent {
    @Input() icon!: string;
    @Input() label!: string;
    @Input() type: string = 'button';
    @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

    @Input() disabled_btn: boolean = false;

    public whenClicked(): void {
        this.clicked.emit();
    }
}
