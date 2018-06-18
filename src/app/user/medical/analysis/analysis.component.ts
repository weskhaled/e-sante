import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { MedicalService } from '../../../shared/services/medical.service';

@Component({
    selector: 'app-analysis',
    templateUrl: './analysis.component.html',
    styleUrls: ['./analysis.component.scss'],
    providers: [MedicalService, UserService]
})
export class AnalysisComponent implements OnInit {
    tableData: { headerRow: string[]; dataRows: string[][]; };
    item: any = { analysis: null };
    userId: any;
    count: any;
    path: any;
    constructor(private service: MedicalService, private userService: UserService) { }

    ngOnInit() {
        this.path = "analysis";
        this.userId = this.userService.getCurrentUserId();
        this.tableData = {
            headerRow: ['ID', 'Analyse', 'Laboratoire', 'Médecin', 'Date', 'Indicateurs'],
            dataRows: []
        };
        this.getAll();
    }

    add() {
        if (this.item.analysis && this.item.labo && this.item.doctor) {
            this.item.user = this.userId;
            this.service.add(this.item, this.path).subscribe(data => {
                if (data) {
                    let row: any[];
                    row = [this.count, data.analysis, data.labo, data.doctor, data.start_date, data.bilan, data._id];
                    this.tableData.dataRows.push(row);
                    this.count++;
                    this.item = {};
                }
            });
        }
    }

    getAll() {
        this.service.getAll(this.userId, this.path).subscribe(datas => {
            if (datas) {
                var i = 1;
                for (let data of datas) {
                    let row: any[];
                    row = [i, data.analysis, data.labo, data.doctor, data.start_date, data.bilan, data._id];
                    this.tableData.dataRows.push(row);
                    i++;
                }
                this.count = i;
            }
        });
    }

    delete(event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var id = target.id;
        this.service.delete(id, this.path).subscribe(data => {
            target.parentElement.parentElement.remove();
        });
    }
}
