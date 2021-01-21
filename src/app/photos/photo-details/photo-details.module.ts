import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations: [
        PhotoDetailsComponent,
        PhotoCommentsComponent
    ],
    exports: [ 
        PhotoDetailsComponent,
        PhotoCommentsComponent 
    ],
    imports: [ 
        CommonModule,
        PhotoModule
    ]
})
export class PhotoDetailsModule {

}