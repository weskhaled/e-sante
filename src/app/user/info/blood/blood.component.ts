import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../shared/services/info.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
    selector: 'app-blood',
    templateUrl: './blood.component.html',
    styleUrls: ['./blood.component.scss'],
    providers: [InfoService, UserService]
})
export class BloodComponent implements OnInit {

    userId: any;
    bloodId: any;
    blood = { group: null, user: null };
    constructor(private infoService: InfoService, private userService: UserService) { }

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        this.getBlood();

    }

    getBlood() {
        this.infoService.getBlood(this.userId).subscribe(data => {
            if (data) {
                this.blood = data;
                this.bloodId = data._id;
            }
        });
    }

    updateBlood() {
        if (this.bloodId) {
            this.infoService.updateBlood(this.userId, this.blood).subscribe(data => {
                console.log(data)
            });
        } else {
            this.blood.user = this.userId;
            this.infoService.createBlood(this.blood).subscribe(data => {
                console.log(data)
            });
        }
    }
}
