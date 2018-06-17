import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SanteService {

    constructor(private http: HttpClient) { }

    // alergies
    addAllergy(item): any {
        return this.http.post("http://localhost:3000/sante/allergies", item);
    }

    getAllergies(userId): any {
        return this.http.get("http://localhost:3000/sante/allergies/" + userId);
    }

    // diseases
    addDisease(item): any {
        return this.http.post("http://localhost:3000/sante/diseases", item);
    }

    getDiseases(userId): any {
        return this.http.get("http://localhost:3000/sante/diseases/" + userId);
    }

    // medicaments
    addMedicament(item): any {
        return this.http.post("http://localhost:3000/sante/medicaments", item);
    }

    getMedicaments(userId): any {
        return this.http.get("http://localhost:3000/sante/medicaments/" + userId);
    }

    // surgerys
    addSurgery(item): any {
        return this.http.post("http://localhost:3000/sante/surgerys", item);
    }

    getSurgerys(userId): any {
        return this.http.get("http://localhost:3000/sante/surgerys/" + userId);
    }

    // vaccinations
    addVaccination(item): any {
        return this.http.post("http://localhost:3000/sante/vaccinations", item);
    }

    getVaccinations(userId): any {
        return this.http.get("http://localhost:3000/sante/vaccinations/" + userId);
    }

    // teeths
    addTeeth(item): any {
        return this.http.post("http://localhost:3000/sante/teeths", item);
    }

    getTeeths(userId): any {
        return this.http.get("http://localhost:3000/sante/teeths/" + userId);
    }

}
