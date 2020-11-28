import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        MenuPageRoutingModule,
        SharedModule
    ],
    declarations: [MenuPage]
})
export class MenuPageModule { }
