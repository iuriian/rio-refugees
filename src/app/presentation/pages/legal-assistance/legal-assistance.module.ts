import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegalAssistancePageRoutingModule } from './legal-assistance-routing.module';

import { LegalAssistancePage } from './legal-assistance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegalAssistancePageRoutingModule
  ],
  declarations: [LegalAssistancePage]
})
export class LegalAssistancePageModule {}
