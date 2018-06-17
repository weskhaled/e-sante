import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    providers: [UserService]
})
export class ProfileComponent implements OnInit {
    user: any = {};
    userId: any;
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    
    update() {
        this.userService.updateUser(this.userId, this.user).subscribe(data => {
            console.log(this.userId)
            console.log(this.user)
            console.log(data)
            if (!data.errors) {
            } else {
            }
        });
    }
}
