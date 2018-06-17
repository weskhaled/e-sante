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
            headerRow: ['ID', 'Maladie', 'En cours', 'Héréditaire', 'Longue durée', 'Détection',  'Guérison', 'Autres'],
            dataRows: []
        };
        this.getAll();
    }

    add() {
        this.item.user = this.userId;
        this.service.addDisease(this.item).subscribe(data => {
            if (data) {
                let row: any[];
                row = [this.count, data.disease,  data.in_progress,  data.hereditary,  data.duration, data.start_date, data.end_date, data.description, data._id];
                this.tableData.dataRows.push(row);
                this.count++;
            }
        });
    }

    getAll() {
        this.service.getDiseases(this.userId).subscribe(datas => {
            if (datas) {
                var i = 1;
                for (let data of datas) {
                    let row: any[];
                    row = [i, data.disease,  data.in_progress,  data.hereditary,  data.duration, data.start_date, data.end_date, data.description, data._id];
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
        this.service.deleteDisease(id).subscribe(data => {
            target.parentElement.parentElement.remove();
        });
    }
}
