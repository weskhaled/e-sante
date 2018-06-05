import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-height',
    templateUrl: './height.component.html',
    styleUrls: ['./height.component.scss']
})
export class HeightComponent implements OnInit {

    tableData1: { headerRow: string[]; dataRows: string[][]; };
    constructor() { }

    ngOnInit() {
        this.tableData1 = {
            headerRow: ['ID', 'Taille (cm)', 'Date de mesure'],
            dataRows: [
                ['1', '165', '15/11/2003'],
                ['2', '166', '15/11/2004'],
                ['31', '168', '15/11/2005'],
                ['4', '169', '15/11/2005'],
                ['5', '171', '15/11/2006'],
                ['6', '175', '20/12/2006'],
                ['7', '176', '01/05/2007'],
                ['8', '177', '15/11/2008'],
                ['9', '182', '28/03/2008']
            ]
        };
    }

}
