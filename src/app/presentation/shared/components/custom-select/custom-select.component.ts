import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-custom-select',
    templateUrl: './custom-select.component.html',
    styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent implements OnInit {

    @Input() label = '';
    @Input() content = [];
    @Output() selected: EventEmitter<string> = new EventEmitter<string>();

    public formField = new FormControl();

    constructor() { }

    ngOnInit() { }

}
