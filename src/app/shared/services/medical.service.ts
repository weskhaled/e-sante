import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MedicalService {

    constructor(private http: HttpClient) { }

    // Medical
    add(item, path): any {
        return this.http.post("http://localhost:3000/medical/" + path, item);
    }

    update(id, item, path): any {
        return this.http.put("http://localhost:3000/medical/" + path + "/" + id, item);
    }

    getAll(userId, path): any {
        return this.http.get("http://localhost:3000/medical/" + path + "/" + userId);
    }

    //delete
    delete(id, path): any {
        return this.http.delete("http://localhost:3000/medical/" + path + "/" + id);
    }

}
