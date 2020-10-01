import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  //Retorna se existe o token ou não
  hasToken() {
    return !!this.getToken();
  }

  //seta o token no localstorage do navegador
  setToken(token) {
    window.localStorage.setItem(KEY, token);
  }

  //pega o token do localstorage
  getToken() {
    return window.localStorage.getItem(KEY);
  }

  //remove o token do localstorage
  removeToken() {
    window.localStorage.removeItem(KEY);
  }

}
