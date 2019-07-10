
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { RestResponse } from '../logic/RestResponse.model';
import { Empresa } from '../logic/empresa';
@Injectable({
    providedIn: 'root'
})
export class EmpresaService {
    constructor(private http: HttpClient) { }

    public saveEmpresa(empresa: Empresa): Observable<RestResponse> {
        return this.http.post<RestResponse>("http://localhost:3000/empresa", empresa);
    }

    public login(object: object): Observable<RestResponse> {
        return this.http.post<RestResponse>("http://localhost:3000/login", object);
    }
    
    public siteCOmpany(url: String): Observable<RestResponse> {
        return this.http.get<RestResponse>("http://localhost:3000/"+ url);
    }

    public maxId(): Observable<Number> {
        return this.http.get<Number>("http://localhost:3000/maxId");
    }
}