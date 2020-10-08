import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignInComponent } from '../home/signin/signin.component';
import { SignUpComponent } from '../home/signup/signup.component';
import { ContainerModule } from '../shared/components/container/container.module';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module'

@NgModule({
    declarations: [ 
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ContainerModule,   
        VMessageModule,
        RouterModule
    ]
})
export class HomeModule {

}