import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoFormComponent} from './photo-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        CommonModule,
        VMessageModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        PhotoModule
    ]
})
export class PhotoFormModule{}