import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../token-service/token-service.service';
import { tap } from 'rxjs/operators';



const API_URL: string = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  
  constructor(
    private http: HttpClient,
    private tokenService: TokenService) { }

  ngOnInit(): void {}

  autenticate(userName: string, password: string){
    return this.http.post( API_URL + 'user/login', {userName: userName, password: password}, {observe: 'response'})
    .pipe( tap(res => {
      const authToken = res.headers.get('x-access-token');
      this.tokenService.setToken(authToken);
      console.log(authToken);
    }));
  }
}
