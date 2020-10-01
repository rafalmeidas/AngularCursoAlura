import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { tap } from 'rxjs/operators';



const API_URL: string = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  
  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  ngOnInit(): void {}

  autenticate(userName: string, password: string){
    return this.http.post( API_URL + 'user/login', {userName: userName, password: password}, {observe: 'response'})
    .pipe( tap(res => {
      const authToken = res.headers.get('x-access-token');
      this.userService.setToken(authToken);
      console.log(authToken);
    }));
  }
}
