import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationPageRoutingModule } from './education-routing.module';

import { EducationPage } from './education.page';
import { SharedModule } from '@/presentation/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationPageRoutingModule,
    SharedModule
  ],
  declarations: [EducationPage]
})
export class EducationPageModule {}
