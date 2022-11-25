import { Component, Input } from '@angular/core';

@Component({
    selector: 'ssc-basic-link',
    templateUrl: 'basic-link.component.html',
    styleUrls: ['basic-link.component.scss'],
})
export class BasicLinkComponent {
    @Input() path: string = '/';
    @Input() label!: string;

    @Input() fontSize: string = 'unset';
    @Input() color: string = '#282c34';
    @Input() underlineColor: string = 'hsla(196, 61%, 58%, .75)';
    @Input() fontFamily: string = 'unset';
}
