import { Component, OnInit } from '@angular/core';
import { BrowserService } from '@/services/browser/browser.service';

@Component({
    selector: 'app-education',
    templateUrl: './education.page.html',
    styleUrls: ['./education.page.scss'],
})
export class EducationPage implements OnInit {

    constructor(private browserService: BrowserService) { }

    ngOnInit() {
    }

    openUrl(url) {
        this.browserService.openWithSystemBrowser(url);
    }

}
