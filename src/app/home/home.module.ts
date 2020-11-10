import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignInComponent } from '../home/signin/signin.component';
import { SignUpComponent } from '../home/signup/signup.component';
import { ContainerModule } from '../shared/components/container/container.module';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home.routing';

@NgModule({
    declarations: [ 
        SignInComponent,
        SignUpComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ContainerModule,   
        VMessageModule,
        RouterModule,
        HomeRoutingModule
    ]
})
export class HomeModule {}