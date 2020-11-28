import { Component, OnInit } from '@angular/core';
import { BrowserService } from '@/services/browser/browser.service';

@Component({
    selector: 'app-shelter',
    templateUrl: './shelter.page.html',
    styleUrls: ['./shelter.page.scss'],
})
export class ShelterPage implements OnInit {

    constructor(private browserService: BrowserService) { }

    ngOnInit() {
    }

    openUrl(url) {
        this.browserService.openWithSystemBrowser(url);
    }

}
