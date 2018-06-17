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
            headerRow: ['ID', 'Chirurgie', 'Date', 'Autres'],
            dataRows: []
        };
        this.getAll();
    }

    add() {
        this.item.user = this.userId;
        this.service.addSurgery(this.item).subscribe(data => {
            if (data) {
                let row: any[];
                row = [this.count, data.surgery, data.start_date, data.description, data._id];
                this.tableData.dataRows.push(row);
                this.count++;
            }
        });
    }

    getAll() {
        this.service.getSurgerys(this.userId).subscribe(datas => {
            if (datas) {
                var i = 1;
                for (let data of datas) {
                    let row: any[];
                    row = [i, data.surgery, data.start_date, data.description, data._id];
                    this.tableData.dataRows.push(row);
                    i++;
                }
                this.count = i;
            }
        });
    }

}
