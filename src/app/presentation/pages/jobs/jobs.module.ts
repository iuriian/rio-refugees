import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsPageRoutingModule } from './jobs-routing.module';

import { JobsPage } from './jobs.page';
import { SharedModule } from '@/presentation/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        JobsPageRoutingModule,
        SharedModule
    ],
    declarations: [JobsPage]
})
export class JobsPageModule { }
