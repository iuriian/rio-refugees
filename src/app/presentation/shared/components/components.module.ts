import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomSelectComponent } from './custom-select/custom-select.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { SectionInformationComponent } from './section-information/section-information.component';
import { CustomLinkComponent } from './custom-link/custom-link.component';
import { CustomLinkCallComponent } from './custom-link-call/custom-link-call.component';
import { CustomImageListComponent } from './custom-image-list/custom-image-list.component';
import { SharedModule } from '../shared.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
    declarations: [
        CustomSelectComponent,
        CustomButtonComponent,
        SectionInformationComponent,
        CustomLinkComponent,
        CustomLinkCallComponent,
        CustomImageListComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
        TranslocoModule
    ],
    exports: [
        CustomSelectComponent,
        CustomButtonComponent,
        SectionInformationComponent,
        CustomLinkComponent,
        CustomLinkCallComponent,
        CustomImageListComponent
    ]
})
export class ComponentsModule { }
