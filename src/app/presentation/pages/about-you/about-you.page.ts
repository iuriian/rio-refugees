import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-about-you',
    templateUrl: './about-you.page.html',
    styleUrls: ['./about-you.page.scss'],
})
export class AboutYouPage implements OnInit {

    public nationalities = [
        {
            id: 1,
            name: this.translocoService.translate('brasileiro')
        },
        {
            id: 2,
            name: this.translocoService.translate('americano')
        },
        {
            id: 3,
            name: this.translocoService.translate('angolano')
        },
        {
            id: 4,
            name: this.translocoService.translate('sirio')
        },
        {
            id: 5,
            name: this.translocoService.translate('cubano')
        }
    ];

    public rangeAges = [
        '< 18',
        '18 - 60',
        '> 60'
    ];

    public optionsGender = [
        {
            id: 1,
            name: this.translocoService.translate('mulher')
        },
        {
            id: 2,
            name: this.translocoService.translate('homem')
        },
        {
            id: 3,
            name: this.translocoService.translate('outro')
        }
    ];

    public optionsChildren = [
        {
            id: 1,
            name: this.translocoService.translate('sim')
        },
        {
            id: 2,
            name: this.translocoService.translate('nao')
        }
    ];

    constructor(
        private router: Router,
        private translocoService: TranslocoService,
        private storage: Storage
    ) { }

    ngOnInit() {
        this.storage.get('langRR').then((val) => {
            this.translocoService.setActiveLang(val);
        });
    }

    public selectedNacionality(nacionality) {
        console.log(nacionality);
    }

    public selectedAge(age) {
        console.log(age);
    }

    public selectedGender(gender) {
        console.log(gender);
    }

    public selectedChildrenQuantity(childs) {
        console.log(childs);
    }

    public navigateTo() {
        this.router.navigate(['/menu']);
    }
}
