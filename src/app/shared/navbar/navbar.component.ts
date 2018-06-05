import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    // moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    user: any = {};
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(location: Location, private element: ElementRef, private router: Router) {
        this.location = location;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            var itemValue = this.listTitles[item];
            if (itemValue.path === titlee) {
                return itemValue.title;
            }
            for (var item2 = 0; item2 < itemValue.sub.length; item2++) {
                if (itemValue.sub[item2].path === titlee) {
                    return itemValue.title + ' | ' + itemValue.sub[item2].title;
                }
            }
        }
        
        return 'Dashboard';
    }

    getPath() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            var itemValue = this.listTitles[item];
            if (itemValue.path === titlee) {
                return itemValue.path;
            }
            for (var item2 = 0; item2 < itemValue.sub.length; item2++) {
                if (itemValue.sub[item2].path === titlee) {
                    return itemValue.sub[item2].path;
                }
            }
        }

        return 'dashboard';
    }

    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['login']);
    }
}
