import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [UserService]
})

export class LoginComponent implements OnInit {
    user: any = {};
    error: string;

    constructor(private router: Router, private userService: UserService) { }

    ngOnInit() {
        if (localStorage.getItem('user')) {
            this.router.navigate(['dashboard']);
        }
    }

    login() {
        this.userService.loginUser(this.user).subscribe(data => {
            console.log(data)
            if (data) {
                localStorage.setItem('user', JSON.stringify(data));
                this.router.navigate(['dashboard']);
            } else {
                this.error = "Identifiant et/ou mot de passe incorrect.";
            }
        });
    }
}
