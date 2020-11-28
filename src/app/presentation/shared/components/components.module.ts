import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomSelectComponent } from './custom-select/custom-select.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomButtonComponent } from './custom-button/custom-button.component';

@NgModule({
    declarations: [
        CustomSelectComponent,
        CustomButtonComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule
    ],
    exports: [
        CustomSelectComponent,
        CustomButtonComponent
    ]
})
export class ComponentsModule { }
