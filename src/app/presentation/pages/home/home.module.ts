import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from '@/presentation/shared/shared.module';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslocoModule,
    SharedModule,
    IonicSelectableModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
