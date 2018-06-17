import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { SanteService } from '../../../shared/services/sante.service';

@Component({
    selector: 'app-allergy',
    templateUrl: './allergy.component.html',
    styleUrls: ['./allergy.component.scss'],
    providers: [SanteService, UserService]
})
export class AllergyComponent implements OnInit {
    tableData: { headerRow: string[]; dataRows: string[][]; };
    item: any = { allergy: null };
    userId: any;
    count: any;
    constructor(private service: SanteService, private userService: UserService) { }

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        this.tableData = {
            headerRow: ['ID', 'Allergie'],
            dataRows: []
        };
        this.getAll();
    }

    add() {
        this.item.user = this.userId;
        this.service.addAllergy(this.item).subscribe(data => {
            if (data) {
                let row: any[];
                row = [this.count, data.allergy, data._id];
                this.tableData.dataRows.push(row);
                this.count++;
            }
        });
    }

    getAll() {
        this.service.getAllergies(this.userId).subscribe(data => {
            if (data) {
                var i = 1;
                for (let item of data) {
                    let row: any[];
                    row = [i, item.allergy, data._id];
                    this.tableData.dataRows.push(row);
                    i++;
                }
                this.count = i;
            }
        });
    }

}
