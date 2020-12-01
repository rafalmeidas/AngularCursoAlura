import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from '../../home/signup/user-not-taken.validator.service';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';
import { SignUpService } from './signup.service';
import { NewUser } from 'src/app/core/user/new-user';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signup.component.html',
    providers: [ UserNotTakenValidatorService ]
})
export class SignUpComponent implements OnInit, AfterViewInit {

    signUpForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private plataformDetectorService: PlataformDetectorService,
        private cdRef: ChangeDetectorRef,
        private signupService: SignUpService,
        private router: Router
        ) { }

    ngAfterViewInit(): void {
        this.plataformDetectorService.isPlatformBrowser() &&
            this.emailInput.nativeElement.focus();
        this.cdRef.detectChanges();
    }

    ngOnInit(): void {
        this.signUpForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.min(5),
                    Validators.max(40)
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.min(5),
                    Validators.max(30)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.min(5),
                    Validators.max(14)
                ]
            ],
        });
    }

    register() {
        const newUser = this.signUpForm.getRawValue() as NewUser;
        this.signupService.signup(newUser).subscribe(
        () => this.router.navigate(['']),
            err => console.log(err));
    }
}