import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-custom-link-call',
    templateUrl: './custom-link-call.component.html',
    styleUrls: ['./custom-link-call.component.scss'],
})
export class CustomLinkCallComponent {

    @Input() text = '';
    @Input() tel = '';

    constructor() { }

}
