import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from '../home/signin/signin.component';
import { ContainerModule } from '../shared/components/container/container.module';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module'

@NgModule({
    declarations: [ SignInComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ContainerModule,   
        VMessageModule
    ]
})
export class HomeModule {

}