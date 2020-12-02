import { CountryService } from '@/services/country.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(
        private readonly router: Router,
        private transSrv: TranslocoService,
        private countryService: CountryService,
        private storage: Storage
    ) { }

    ports = this.countryService.countries;
    port;

    navigateTo() {
        this.router.navigate(['/about-you']);
    }

    setLang(lang) {
        this.transSrv.setActiveLang(lang.value.type);
        this.storage.set('langRR', lang.value.type);
    }
}
