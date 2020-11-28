import { Component, OnInit } from '@angular/core';
import { BrowserService } from '@/services/browser/browser.service';

@Component({
    selector: 'app-legal-assistance',
    templateUrl: './legal-assistance.page.html',
    styleUrls: ['./legal-assistance.page.scss'],
})
export class LegalAssistancePage implements OnInit {

    constructor(private browserService: BrowserService) { }

    ngOnInit() {
    }

    openUrl(url) {
        this.browserService.openWithSystemBrowser(url);
    }

}
