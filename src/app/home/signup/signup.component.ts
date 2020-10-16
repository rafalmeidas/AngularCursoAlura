import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from '../../home/signup/user-not-taken.validator.service';

@Component({
    templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {

    signUpForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService) { }

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

    login() {
        const userName = this.signUpForm.get('userName').value;
        const password = this.signUpForm.get('password').value;
    }
}