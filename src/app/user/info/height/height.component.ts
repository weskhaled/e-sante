import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../shared/services/info.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
    selector: 'app-height',
    templateUrl: './height.component.html',
    styleUrls: ['./height.component.scss'],
    providers: [InfoService, UserService]
})
export class HeightComponent implements OnInit {

    tableData: { headerRow: string[]; dataRows: string[][]; };
    heightId: any;
    userId: any;
    initHeight = { height_id: null, height: null, date: null };
    height = { height: null, date: null, user: null };
    heights: any;
    count: any;
    constructor(private infoService: InfoService, private userService: UserService) { }

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        this.tableData = {
            headerRow: ['ID', 'Taille (cm)', 'Date de mesure'],
            dataRows: []
        };
        this.getHeight();
        
    }

    getAllHeights() {
        if (this.heightId) {
            this.infoService.getAllHeights(this.heightId).subscribe(data => {
                console.log(data)
                if (data) {
                    this.heights = data;
                    var i = 1;
                    for (let height of this.heights) {
                        let row: any[];
                        row = [i, height.height, height.date, height._id];
                        this.tableData.dataRows.push(row);
                        i++;
                    }
                    this.count = i;
                }
            });

            let row = [this.count, this.height.height, this.height.date];
            this.tableData.dataRows.push(row);
        }
    }

    getHeight() {
        this.infoService.getHeight(this.userId).subscribe(data => {
            if (data) {
                this.height = data;
                this.initHeight.height_id = data._id;
                this.initHeight.height = data.height;
                this.initHeight.date = data.date;
                this.heightId = data._id;

                this.getAllHeights();
            }
        });
    }

    updateHeight() {
        this.height.user = this.userId;

        if (this.heightId) {
            this.infoService.createHeightHistory(this.initHeight).subscribe(data => {
                let row: any[];
                row = [this.count++, data.height, data.date];
                this.tableData.dataRows.push(row);
            });
            this.infoService.updateHeight(this.heightId, this.height).subscribe(data => {
                this.initHeight.height = data.height;
                this.initHeight.date = data.date;
                this.initHeight.height_id = data._id;
            });
        } else {
            this.infoService.createHeight(this.height).subscribe(data => {
                this.initHeight.height = data.height;
                this.initHeight.date = data.date;
                this.initHeight.height_id = data._id;
            });
        }

    }

    delete (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var id = target.id;
        this.infoService.deleteHeight(id).subscribe(data => {
            target.parentElement.parentElement.remove();
        });
    }
}
