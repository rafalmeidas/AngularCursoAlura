import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API_URL: string = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  autenticate(userName: string, password: string){
    return this.http.post( API_URL + 'user/login', {userName: userName, password: password});
  }
}
