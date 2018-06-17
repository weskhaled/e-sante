import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { SanteService } from '../../../shared/services/sante.service';

@Component({
    selector: 'app-surgery',
    templateUrl: './surgery.component.html',
    styleUrls: ['./surgery.component.scss'],
    providers: [SanteService, UserService]
})
export class SurgeryComponent implements OnInit {
    tableData: { headerRow: string[]; dataRows: string[][]; };
    item: any = { surgery: null };
    userId: any;
    count: any;
    constructor(private service: SanteService, private userService: UserService) { }

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        this.tableData = {
            headerRow: ['ID', 'Chirurgie'],
            dataRows: []
        };
        this.getAll();
    }

    add() {
        this.item.user = this.userId;
        this.service.addSurgery(this.item).subscribe(data => {
            if (data) {
                let row: any[];
                row = [this.count, data.surgery, data._id];
                this.tableData.dataRows.push(row);
                this.count++;
            }
        });
    }

    getAll() {
        this.service.getSurgerys(this.userId).subscribe(data => {
            if (data) {
                var i = 1;
                for (let item of data) {
                    let row: any[];
                    row = [i, item.surgery, data._id];
                    this.tableData.dataRows.push(row);
                    i++;
                }
                this.count = i;
            }
        });
    }

}
