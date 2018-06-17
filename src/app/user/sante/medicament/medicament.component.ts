import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { SanteService } from '../../../shared/services/sante.service';

@Component({
    selector: 'app-medicament',
    templateUrl: './medicament.component.html',
    styleUrls: ['./medicament.component.scss'],
    providers: [SanteService, UserService]
})
export class MedicamentComponent implements OnInit {
    tableData: { headerRow: string[]; dataRows: string[][]; };
    item: any = { medicament: null };
    userId: any;
    count: any;
    constructor(private service: SanteService, private userService: UserService) { }

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        this.tableData = {
            headerRow: ['ID', 'Médicament'],
            dataRows: []
        };
        this.getAll();
    }

    add() {
        this.item.user = this.userId;
        this.service.addMedicament(this.item).subscribe(data => {
            if (data) {
                let row: any[];
                row = [this.count, data.medicament, data._id];
                this.tableData.dataRows.push(row);
                this.count++;
            }
        });
    }

    getAll() {
        this.service.getMedicaments(this.userId).subscribe(data => {
            if (data) {
                var i = 1;
                for (let item of data) {
                    let row: any[];
                    row = [i, item.medicament, data._id];
                    this.tableData.dataRows.push(row);
                    i++;
                }
                this.count = i;
            }
        });
    }

}
