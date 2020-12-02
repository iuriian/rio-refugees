import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { ComponentsModule } from './components/components.module';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
    exports: [
        ComponentsModule,
        TranslocoModule,
        IonicStorageModule
    ]
})
export class SharedModule { }
