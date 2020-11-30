import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShelterPageRoutingModule } from './shelter-routing.module';

import { ShelterPage } from './shelter.page';
import { SharedModule } from '@/presentation/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ShelterPageRoutingModule,
        SharedModule
    ],
    declarations: [ShelterPage]
})
export class ShelterPageModule { }
