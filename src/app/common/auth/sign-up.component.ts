import { Component } from '@angular/core';
import { validateConfig } from '@angular/router/src/config';
import { Router } from '@angular/router';
@Component({
    //selector: 'sign-up-User',
    templateUrl: './sign-up.component.html',
    styles: 
    [`
    .required { color: red; }
    `]
})
export class SignUpComponent {
    email = ''; 
    firstName = ''; 
    lastName = ''; 
    password = ''; 
    phoneNumber = ''; 
    isValid = false; 
    isUserRegister = false; 

    constructor(private router: Router) {
        
    } 
        signUp(): void {
            const newUser = {
                email: this.email,
                firstName: this.firstName, 
                lastName: this.lastName,
                password: this.password, 
                phoneNumber: this.phoneNumber,
            };
            if (newUser.email && newUser.firstName && newUser.lastName && newUser.password) {
                console.log(newUser);
            } else {
                console.log('form is broken');
            }
            if (newUser.email == '' || newUser.firstName == '' || newUser.lastName == '' || newUser.password == '') {
                this.isValid = true; 
            }
            if (this.isValid == false)
            {
                this.isUserRegister = true;  
            }
            
                /*this.router.navigate(['../../home/']);*/
            
             
     }

     
     }

