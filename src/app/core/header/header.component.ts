import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})


export class HeaderComponent {

    user$: Observable<User>;
    user: User;

    constructor( userService: UserService){
        //salvo o usuário em um observable, que é devolvido po userService
        this.user$= userService.getUser();
        //salva o resultado dentro de user para utilizar no template
        this.user$.subscribe( user => this.user = user);
    }

}