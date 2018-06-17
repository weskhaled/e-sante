import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { SanteService } from '../../../shared/services/sante.service';

@Component({
    selector: 'app-disease',
    templateUrl: './disease.component.html',
    styleUrls: ['./disease.component.scss'],
    providers: [SanteService, UserService]
})
export class DiseaseComponent implements OnInit {
    tableData: { headerRow: string[]; dataRows: string[][]; };
    item: any = { disease: null };
    userId: any;
    count: any;
    constructor(private service: SanteService, private userService: UserService) { }

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        this.tableData = {
            headerRow: ['ID', 'Maladie'],
            dataRows: []
        };
        this.getAll();
    }

    add() {
        this.item.user = this.userId;
        this.service.addDisease(this.item).subscribe(data => {
            if (data) {
                let row: any[];
                row = [this.count, data.disease, data._id];
                this.tableData.dataRows.push(row);
                this.count++;
            }
        });
    }

    getAll() {
        this.service.getDiseases(this.userId).subscribe(data => {
            if (data) {
                var i = 1;
                for (let item of data) {
                    let row: any[];
                    row = [i, item.disease, data._id];
                    this.tableData.dataRows.push(row);
                    i++;
                }
                this.count = i;
            }
        });
    }

}
