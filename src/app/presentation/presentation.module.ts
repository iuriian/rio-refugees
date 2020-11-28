import { NgModule } from '@angular/core';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        PagesModule,
        SharedModule
    ],
    exports: [
        PagesModule
    ]
})
export class PresentationModule { }
