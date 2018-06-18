import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { MedicalService } from '../../../shared/services/medical.service';

@Component({
    selector: 'app-doctor',
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.scss'],
    providers: [MedicalService, UserService]
})
export class DoctorComponent implements OnInit {
    tableData: { headerRow: string[]; dataRows: string[][]; };
    item: any = { doctor: null };
    userId: any;
    count: any;
    path: any;
    constructor(private service: MedicalService, private userService: UserService) { }

    ngOnInit() {
        this.path = "doctor";
        this.userId = this.userService.getCurrentUserId();
        this.tableData = {
            headerRow: ['ID', 'Spécialité', 'Médecin', 'Actuel?', 'Commentaire'],
            dataRows: []
        };
        this.getAll();
    }

    add() {
        if (this.item.doctor && this.item.speciality) {
            this.item.user = this.userId;
            this.service.add(this.item, this.path).subscribe(data => {
                if (data) {
                    let row: any[];
                    row = [this.count, data.speciality, data.doctor, data.current, data.comment, data._id];
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
                    row = [i, data.speciality, data.doctor, data.current, data.comment, data._id];
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
