import { Component, Input } from '@angular/core';
import { BrowserService } from '@/services/browser/browser.service';

@Component({
    selector: 'app-section-information',
    templateUrl: './section-information.component.html',
    styleUrls: ['./section-information.component.scss'],
})
export class SectionInformationComponent {

    @Input() title = '';
    @Input() hasMap = false;
    @Input() linkMap = '';

    constructor(
        private readonly browserService: BrowserService
    ) { }

    openUrl() {
        this.browserService.openWithSystemBrowser(this.linkMap);
    }

}
