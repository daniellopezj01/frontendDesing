import { Proyecto } from '../logic/proyecto';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { RestResponse } from '../logic/RestResponse.model';
import { Empresa } from '../logic/empresa';
@Injectable({
    providedIn: 'root'
})
export class ProyectoService {
    constructor(private http: HttpClient) { }

    public projects(value: Number): Observable<RestResponse> {
        return this.http.get<RestResponse>("http://localhost:3000/showprojects/" + value);
    }

    public unicProjects(id: Number): Observable<RestResponse> {
        return this.http.get<RestResponse>("http://localhost:3000/selectProject/" + id);
    } 

    public saveProject(proyecto: Proyecto): Observable<RestResponse> {
        return this.http.post<RestResponse>("http://localhost:3000/showprojects", proyecto);
    }
    public UpdateProject(proyecto: Proyecto): Observable<RestResponse> {
        return this.http.put<RestResponse>("http://localhost:3000/showprojects", proyecto);
    }

    public DeleteProject(id: Number): Observable<RestResponse> {
        return this.http.delete<RestResponse>("http://localhost:3000/showprojects/" + id);
    }

}