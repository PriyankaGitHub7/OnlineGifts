import { Injectable } from '@angular/core';
import { Headers,Http, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

    apiUrl : String = 'http://localhost:8000/';

    constructor(private _http: Http) {
    }

    postMethods(methodName, dataToPost) : any {

        const headers =  new Headers();
        headers.append('Content-Type', 'application/json');
        const url = this.apiUrl + methodName;

        var resp = this._http.post(url, JSON.stringify(dataToPost), { headers })
        .map((res) =>  {
            return res.json();
        });
        return resp;
    }
}