import { Component, OnInit } from '@angular/core';
import { BrowserService } from '@/services/browser/browser.service';

@Component({
    selector: 'app-jobs',
    templateUrl: './jobs.page.html',
    styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {

    constructor(private browserService: BrowserService) { }

    ngOnInit() {
    }

    openUrl(url) {
        this.browserService.openWithSystemBrowser(url);
    }

}
