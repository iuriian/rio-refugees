import { NgModule } from '@angular/core';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    exports: [
        SharedModule,
        PagesModule
    ]
})
export class PresentationModule { }
