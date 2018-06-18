import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../shared/services/info.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
    selector: 'app-weight',
    templateUrl: './weight.component.html',
    styleUrls: ['./weight.component.scss'],
    providers: [InfoService, UserService]
})
export class WeightComponent implements OnInit {

    tableData: { headerRow: string[]; dataRows: string[][]; };
    weightId: any;
    userId: any;
    initWeight = { weight_id: null, weight: null, date: null };
    weight = { weight: null, date: null, user: null };
    weights: any;
    count: any;
    constructor(private infoService: InfoService, private userService: UserService) { }

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        this.tableData = {
            headerRow: ['ID', 'Poids (kg)', 'Date de mesure'],
            dataRows: []
        };
        this.getWeight();
        
    }

    getAllWeights() {
        if (this.weightId) {
            this.infoService.getAllWeights(this.weightId).subscribe(data => {
                if (data) {
                    this.weights = data;
                    var i = 1;
                    for (let weight of this.weights) {
                        let row: any[];
                        row = [i, weight.weight, weight.date, weight._id];
                        this.tableData.dataRows.push(row);
                        i++;
                    }
                    this.count = i;
                }
            });

            let row = [this.count, this.weight.weight, this.weight.date];
            this.tableData.dataRows.push(row);
        }
    }

    getWeight() {
        this.infoService.getWeight(this.userId).subscribe(data => {
            if (data) {
                this.weight = data;
                this.initWeight.weight_id = data._id;
                this.initWeight.weight = data.weight;
                this.initWeight.date = data.date;
                this.weightId = data._id;

                this.getAllWeights();
            }
        });
    }

    updateWeight() {
        this.weight.user = this.userId;

        if (this.weightId) {
            this.infoService.createWeightHistory(this.initWeight).subscribe(data => {
                console.log(data)
                let row: any[];
                row = [this.count++, data.weight, data.date, data._id];
                this.tableData.dataRows.push(row);
            });
            this.infoService.updateWeight(this.weightId, this.weight).subscribe(data => {
                this.initWeight.weight = data.weight;
                this.initWeight.date = data.date;
                this.initWeight.weight_id = data._id;
            });
        } else {
            this.infoService.createWeight(this.weight).subscribe(data => {
                this.initWeight.weight = data.weight;
                this.initWeight.date = data.date;
                this.initWeight.weight_id = data._id;
            });
        }

    }

    delete (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var id = target.id;
        this.infoService.deleteWeight(id).subscribe(data => {
            target.parentElement.parentElement.remove();
        });
    }
}
