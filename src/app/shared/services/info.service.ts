import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InfoService {

    constructor(private http: HttpClient) { }

    // blood
    createBlood(blood): any {
        return this.http.post("http://localhost:3000/infos/blood", blood);
    }

    updateBlood(bloodId, blood): any {
        return this.http.put("http://localhost:3000/infos/blood/" + bloodId, blood);
    }

    getBlood(userId): any {
        console.log(userId)
        return this.http.get("http://localhost:3000/infos/blood/" + userId);
    }

    // height
    createHeight(height): any {
        return this.http.post("http://localhost:3000/infos/heights", height);
    }

    createHeightHistory(height): any {
        return this.http.post("http://localhost:3000/infos/heights/history", height);
    }

    getAllHeights(userId): any {
        return this.http.get("http://localhost:3000/infos/heights/history/" + userId);
    }

    getHeight(userId): any {
        return this.http.get("http://localhost:3000/infos/heights/" + userId);
    }

    updateHeight(heightId, height): any {
        return this.http.put("http://localhost:3000/infos/heights/" + heightId, height);
    }

    deleteHeight(heightId): any {
        return this.http.delete("http://localhost:3000/infos/heights/history/" + heightId);
    }

    // weight
    createWeight(weight): any {
        return this.http.post("http://localhost:3000/infos/weights", weight);
    }

    createWeightHistory(weight): any {
        return this.http.post("http://localhost:3000/infos/weights/history", weight);
    }

    getAllWeights(userId): any {
        return this.http.get("http://localhost:3000/infos/weights/history/" + userId);
    }

    getWeight(userId): any {
        return this.http.get("http://localhost:3000/infos/weights/" + userId);
    }

    updateWeight(weightId, weight): any {
        return this.http.put("http://localhost:3000/infos/weights/" + weightId, weight);
    }

    deleteWeight(weightId): any {
        return this.http.delete("http://localhost:3000/infos/weights/history/" + weightId);
    }
}
