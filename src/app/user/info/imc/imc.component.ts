import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../shared/services/info.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
    selector: 'app-imc',
    templateUrl: './imc.component.html',
    styleUrls: ['./imc.component.scss'],
    providers: [InfoService, UserService]
})
export class ImcComponent implements OnInit {

    height: any;
    weight: any;
    imc: any;
    userId: any;
    constructor(private infoService: InfoService, private userService: UserService) { }

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        this.getImc();

    }

    getImc() {
        this.infoService.getHeight(this.userId).subscribe(data => {
            if (data) {
                this.height = data.height;
                this.infoService.getWeight(this.userId).subscribe(data => {
                    if (data) {
                        this.weight = data.weight;
                        this.imc = this.weight / Math.pow(this.height / 100, 2);
                    }
                });
            }
        });
    }
}
