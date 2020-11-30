import { Component, Input, OnInit } from '@angular/core';
import { BrowserService } from '@/services/browser/browser.service';

@Component({
    selector: 'app-custom-link',
    templateUrl: './custom-link.component.html',
    styleUrls: ['./custom-link.component.scss'],
})
export class CustomLinkComponent implements OnInit {

    @Input() textLink = '';
    @Input() url = '';

    constructor(
        private readonly browserService: BrowserService
    ) { }

    ngOnInit() { }

    public openUrl() {
        this.browserService.openWithSystemBrowser(this.url);
    }

}
