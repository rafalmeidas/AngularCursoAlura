import { NgModule } from '@angular/core';

import { SignInComponent } from '../home/signin/signin.component';
import { ContainerModule } from '../shared/components/container/container.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ SignInComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ContainerModule,   
    ]
})
export class HomeModule {

}