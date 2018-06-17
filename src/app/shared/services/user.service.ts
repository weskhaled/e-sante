import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    getAllUsers(): any {
        return this.http.get("http://localhost:3000/users");
    }

    deleteUser(userId): any {
        return this.http.delete('http://localhost:3000/users/' + userId);
    }

    getUserById(userId): any {
        return this.http.get('http://localhost:3000/users/' + userId);
    }

    newUser(user): any {
        return this.http.post('http://localhost:3000/users', user);
    }

    updateUser(userId, user): any {
        return this.http.put('http://localhost:3000/users/' + userId, user);
    }

    loginUser(user): any {
        return this.http.post('http://localhost:3000/login', user);
    }

    getCurrentUserId(): any {
        let user = JSON.parse(localStorage.getItem('user'));
        return user._id;
    }

}
