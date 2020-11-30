import { Component, OnInit } from '@angular/core';
import { BrowserService } from '@/services/browser/browser.service';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.page.html',
    styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

    public countriesList$: Observable<any>;

    constructor(
        private browserService: BrowserService,
        private readonly httpClient: HttpClient
    ) { }

    ngOnInit() {
        this.countriesList$ = this.httpClient.get('../../../../assets/countries-paths.json');
    }

    openUrl(url) {
        this.browserService.openWithSystemBrowser(url);
    }

}
