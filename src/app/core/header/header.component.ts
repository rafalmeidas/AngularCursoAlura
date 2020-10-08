import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})


export class HeaderComponent {

    user$: Observable<User>;
    //user: User;

    constructor( 
        private userService: UserService,
        private router: Router      
        ){
        // //salvo o usuário em um observable, que é devolvido po userService
        // this.user$= userService.getUser();
        // //salva o resultado dentro de user para utilizar no template
        // this.user$.subscribe( user => this.user = user);

        //Acessando o observable com o pipe async no templete
        this.user$= userService.getUser();
    }

    logout(){
        this.userService.logout();
        //Navega até a rota inicial, antes executa o logout do serviço de userservice
        this.router.navigate(['']);
    }
}