import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { SearchComponent } from './search/search.component'
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from '../../shared/components/card/card.module';
import { ContainerModule } from '../../shared/components/container/container.module';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module'

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescriptionPipe,
        SearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        ContainerModule,
        CardModule,
        DarkenOnHoverModule
    ]
})
export class PhotoListModule { }