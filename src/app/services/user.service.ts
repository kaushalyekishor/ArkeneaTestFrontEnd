import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn:'root'
})

export class HttpRequestService{
    constructor(private _http:HttpClient){}

    createFeedback(user: any){
        return this._http.post('http://localhost:8080/user/createFeedback', user);
    }
}