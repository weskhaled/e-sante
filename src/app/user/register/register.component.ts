import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    user: any = {
        role: "",
        option: "",
        language: "",
        gender: "",
        firstname:"",
        lastname:"",
        birthday: "",
        country: "",
        region: "",
        city: "",
        zipcode: "",
        address: "",
        mobile:"",
        phone: "",
        email: "",
        avatar: "",
        photo: ""
    };
    constructor() { }

    ngOnInit() {
    }

    register() {
        
    }

}
