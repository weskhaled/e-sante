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
    error: any;
    success: any;
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    
    update() {
        this.success = "";
        this.error = "";
        this.userService.updateUser(this.userId, this.user).subscribe(data => {
            if (!data.errors) {
                localStorage.setItem('user', JSON.stringify(data));
                this.success = "Les modifications ont été enregistrées avec succès.";
            } else {
                this.error = "une erreur s'est produite veuillez vérifier vos informations !";
            }
        });
    }
}
