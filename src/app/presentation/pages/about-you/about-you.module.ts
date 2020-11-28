import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { AboutYouPageRoutingModule } from './about-you-routing.module';

import { AboutYouPage } from './about-you.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
        AboutYouPageRoutingModule
    ],
    declarations: [AboutYouPage]
})
export class AboutYouPageModule { }
