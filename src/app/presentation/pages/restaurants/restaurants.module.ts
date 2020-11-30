import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantsPageRoutingModule } from './restaurants-routing.module';

import { RestaurantsPage } from './restaurants.page';
import { SharedModule } from '@/presentation/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RestaurantsPageRoutingModule,
        SharedModule,
        HttpClientModule
    ],
    declarations: [RestaurantsPage]
})
export class RestaurantsPageModule { }
