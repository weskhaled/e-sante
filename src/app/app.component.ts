import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { Router } from '@angular/router';
import { GlobalService } from './shared/services/global.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [GlobalService]
})
export class AppComponent implements OnInit {

    urlInfo: any;

    constructor(public location: Location, private route: Router, private urlcheck: GlobalService) {
    }

    ngOnInit() {
        this.urlInfo = this.urlcheck.getURLInfo();
    }

    ngDoCheck() {
        this.urlInfo = this.urlcheck.getURLInfo();
    }
}
