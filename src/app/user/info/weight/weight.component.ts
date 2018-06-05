import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-weight',
    templateUrl: './weight.component.html',
    styleUrls: ['./weight.component.scss']
})
export class WeightComponent implements OnInit {
    tableData1: { headerRow: string[]; dataRows: string[][]; };
    constructor() { }

    ngOnInit() {
        this.tableData1 = {
            headerRow: ['ID', 'Poids (Kg)', 'Date de mesure'],
            dataRows: [
                ['1', '74', '15/11/2003'],
                ['2', '66', '15/11/2004'],
                ['3', '68', '15/11/2005'],
                ['4', '69', '15/11/2005'],
                ['5', '71', '15/11/2006'],
                ['6', '75', '20/12/2006'],
                ['7', '76', '01/05/2007'],
                ['8', '77', '15/11/2008'],
                ['9', '82', '28/03/2008']
            ]
        };
    }

}
