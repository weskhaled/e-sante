import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    providers: [UserService]
})

export class RegisterComponent implements OnInit {
    user: any = {};
    error: string;

    constructor(private router: Router, private userService: UserService) { }

    ngOnInit() {
        if (localStorage.getItem('user')) {
            this.router.navigate(['dashboard']);
        }
    }

    register() {
        this.userService.newUser(this.user).subscribe(data => {
            console.log(data)
            if (!data.errors) {
                localStorage.setItem('user', JSON.stringify(data));
                this.router.navigate(['dashborad']);
            } else {
                this.error = "Votre formulaire est incomplet ou comporte des erreurs !"; 
            }
        });
    }
}
