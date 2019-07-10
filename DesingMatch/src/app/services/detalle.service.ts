import { Detalle_disenio } from 'src/app/logic/detalle_disenio';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestResponse } from '../logic/RestResponse.model';
@Injectable({
    providedIn: 'root'
})
export class DetalleService {
    constructor(private http: HttpClient) { }

    public saveDetailsDesing(Detalle_disenio: FormData): Observable<RestResponse> {
        const httpHeaders = new HttpHeaders();
        httpHeaders.append("Accept", 'application/json');
        httpHeaders.delete("Content-Type");

        return this.http.post<RestResponse>("http://localhost:3000/Desing", Detalle_disenio, { headers: httpHeaders });
    }

}