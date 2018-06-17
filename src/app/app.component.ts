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
    user: any = {};
    urlInfo: any;

    constructor(public location: Location, private router: Router, private urlcheck: GlobalService) {
    }

    ngOnInit() {
        this.urlInfo = this.urlcheck.getURLInfo();
        this.user = JSON.parse(localStorage.getItem('user'));
        if (!this.user) {
            this.router.navigate(['login']);
        }
    }

    ngDoCheck() {
        this.urlInfo = this.urlcheck.getURLInfo();
    }
}
