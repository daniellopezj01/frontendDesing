
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { RestResponse } from './../models/RestResponse.model';
import { Empresa } from '../models/empresa';
@Injectable({
    providedIn: 'root'
})
export class EmpresaService {
    constructor(private http: HttpClient) { }

    /* public saveOurUpdate(user: UserModel): Observable<RestResponse> {
         return this.http.post<RestResponse>('https://hotel-yeimar.herokuapp.com/listUser', user);
     }
 
     public verifyUser(document: string): Observable<RestResponse> {
         return this.http.get<RestResponse>('https://hotel-yeimar.herokuapp.com/listUser/verifyUser/' + document);
     }
 
     public validateReserveshared(date1: String, date2: String): Observable<Number> {
         return this.http.get<Number>("https://hotel-yeimar.herokuapp.com/listReserve/sharedAvailability?date=" + date1 + "&date=" + date2);
     }
 
     public validateindividualAvailabilityRoom(date1: String, date2: String, camas:number): Observable<Number> {
         return this.http.get<Number>("https://hotel-yeimar.herokuapp.com/listReserve/individualAvailabilityRoom?date=" + date1 + "&date=" + date2+ "&date=" + camas);
     }
 */
    public saveEmpresa(empresa: Empresa): Observable<RestResponse> {
        return this.http.post<RestResponse>("http://localhost:3000/empresa", empresa);
    }

    public login(object: object): Observable<RestResponse> {
        return this.http.post<RestResponse>("http://localhost:3000/login", object);
    }


    public maxId(): Observable<Number> {
        return this.http.get<Number>("http://localhost:3000/maxId");
    }
}