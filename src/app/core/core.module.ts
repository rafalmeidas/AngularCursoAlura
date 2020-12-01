import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor'

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        HeaderComponent, 
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS, //quando for chamado o provider de Interceptar padrão eu vou querer executar a minha classe RequestInterceptor
            useClass: RequestInterceptor, 
            multi: true
        }
    ]
})
export class CoreModule {

}