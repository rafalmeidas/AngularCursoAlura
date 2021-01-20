import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [PhotoDetailsComponent],
    exports: [ PhotoDetailsComponent ],
    imports: [ CommonModule]
})
export class PhotoDetailsModule {

}