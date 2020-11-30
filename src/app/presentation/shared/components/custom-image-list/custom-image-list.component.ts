import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-custom-image-list',
    templateUrl: './custom-image-list.component.html',
    styleUrls: ['./custom-image-list.component.scss'],
})
export class CustomImageListComponent {

    @Input() img = '';
    @Input() title = '';

    constructor() { }

}
