import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service'
import { PlataformDetectorService } from '../../core/plataform-detector/plataform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlataformDetectorService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {

    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.authService.autenticate(userName, password).subscribe(
      () =>
        //user/flavio
        this.router.navigate(['user', userName]),
      err => {
        console.log(err);
        this.loginForm.reset();
        // Se a plataforma for no navegador ele vai executar o focus no campo, se não nem irá executar por isso está utilizando o &&
        this.platformDetectorService.isPlatformBrowser() &&
                this.userNameInput.nativeElement.focus();
        alert('User name or pasword is incorrect!');
      }
    );
  }
}
