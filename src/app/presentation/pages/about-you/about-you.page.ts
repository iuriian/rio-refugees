import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about-you',
    templateUrl: './about-you.page.html',
    styleUrls: ['./about-you.page.scss'],
})
export class AboutYouPage implements OnInit {

    public nationalities = [
        {
            id: 1,
            name: 'Brasileiro'
        },
        {
            id: 2,
            name: 'Americano'
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
            name: 'Mulher'
        },
        {
            id: 2,
            name: 'Homem'
        },
        {
            id: 3,
            name: 'Outro'
        }
    ];

    public optionsChildren = [
        {
            id: 1,
            name: 'Sim'
        },
        {
            id: 2,
            name: 'Não'
        }
    ];

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
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
