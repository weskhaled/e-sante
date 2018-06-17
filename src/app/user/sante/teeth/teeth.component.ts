import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { SanteService } from '../../../shared/services/sante.service';

@Component({
    selector: 'app-teeth',
    templateUrl: './teeth.component.html',
    styleUrls: ['./teeth.component.scss'],
    providers: [SanteService, UserService]
})
export class TeethComponent implements OnInit {
    tableData: { headerRow: string[]; dataRows: string[][]; };
    item: any = { teeth: null };
    userId: any;
    count: any;
    constructor(private service: SanteService, private userService: UserService) { }

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        this.tableData = {
            headerRow: ['ID', 'Dents', 'Acte', 'Dentiste', 'Date', 'Autres'],
            dataRows: []
        };
        this.getAll();
    }

    add() {
        this.item.user = this.userId;
        this.service.addTeeth(this.item).subscribe(data => {
            if (data) {
                let row: any[];
                row = [this.count, data.teeth, data.act, data.dentiste, data.start_date, data.description, data._id];
                this.tableData.dataRows.push(row);
                this.count++;
            }
        });
    }

    getAll() {
        this.service.getTeeths(this.userId).subscribe(datas => {
            if (datas) {
                var i = 1;
                for (let data of datas) {
                    let row: any[];
                    row = [i, data.teeth, data.act, data.dentiste, data.start_date, data.description, data._id];
                    this.tableData.dataRows.push(row);
                    i++;
                }
                this.count = i;
            }
        });
    }

    delete (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var id = target.id;
        this.service.deleteTeeth(id).subscribe(data => {
            target.parentElement.parentElement.remove();
        });
    }
}
