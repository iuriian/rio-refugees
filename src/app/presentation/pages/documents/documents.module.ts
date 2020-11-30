import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsPageRoutingModule } from './documents-routing.module';

import { DocumentsPage } from './documents.page';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SharedModule } from '@/presentation/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DocumentsPageRoutingModule,
        SharedModule
    ],
    providers: [
        InAppBrowser,
    ],
    declarations: [DocumentsPage]
})
export class DocumentsPageModule { }
