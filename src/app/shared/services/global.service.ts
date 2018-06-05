import { Injectable } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Injectable()
export class GlobalService {

    constructor(private route: Router) {
    }
    ngOnInit() {
        console.log("from service", this.route.url)
    }
    getURLInfo() {
        if (this.route.url == '/login' || this.route.url == '/register') {
            return false;
        }
        else {
            return true;
        }
    }
}
