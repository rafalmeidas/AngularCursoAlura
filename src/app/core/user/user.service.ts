import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSubject = new Subject<User>();

    constructor(private tokenService: TokenService) {
        //verifica se tem o token se tiver executa o método de decodificar o token e emitir
        this.tokenService.hasToken() &&
            this.decodeAndNotify();
    }

    //seta o token no storage do navegador
    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    //retorna um observable, o qual possibilita fazer o subscribe e acessar dados
    getUser() { 
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User; //aqui a chamada jwt_decode
        this.userSubject.next(user); //emitindo os dados após a conversão do token pelo jwt
    }
}