import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {

    signUpForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

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
                    Validators.pattern(/^[a-z0-9_\-]+$/),
                    Validators.min(5),
                    Validators.max(30)
                ]
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

    login() {

        const userName = this.signUpForm.get('userName').value;
        const password = this.signUpForm.get('password').value;
    }
}