import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from "rxjs/operators";

import { SignUpService } from './signup.service';

@Injectable({
    providedIn: 'root'
})
export class UserNotTakenValidatorService {

    constructor(private signUpService: SignUpService) { }

    checkUserNameTaken() {
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName => {
                    return this.signUpService.checkUserNameTaken(userName);
                }))//o retorno do signUpService é verdadeiro ou falso true:false
                .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null)) //isTaken é somente o nome dado para o retorno do pipe anterior
                .pipe(first()); //finaliza o observable e da o retorno
        }
    }
}