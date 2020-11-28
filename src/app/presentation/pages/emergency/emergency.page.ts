import { Component, OnInit } from '@angular/core';
import { BrowserService } from '@/services/browser/browser.service';
import { CallsService } from '@/services/calls/calls.service';

@Component({
    selector: 'app-emergency',
    templateUrl: './emergency.page.html',
    styleUrls: ['./emergency.page.scss'],
})
export class EmergencyPage implements OnInit {

    constructor(
        private browserService: BrowserService,
        private callService: CallsService
    ) { }

    ngOnInit() {
    }

    openUrl(url) {
        this.browserService.openWithSystemBrowser(url);
    }

    efetueCall(numberCall) {
        this.callService.call(numberCall);
    }

}
