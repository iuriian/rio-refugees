import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomSelectComponent } from './custom-select/custom-select.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CustomSelectComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule
    ],
    exports: [
        CustomSelectComponent
    ]
})
export class ComponentsModule { }
