import { Detalle_disenio } from './../logic/detalle_disenio';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestResponse } from '../logic/RestResponse.model';
@Injectable({
    providedIn: 'root'
})
export class DetalleService {
    constructor(private http: HttpClient) { }

    public saveDetailsDesingimage(image: FormData): Observable<RestResponse> {
        return this.http.post<RestResponse>("http://localhost:3000/DesingImage", image);
    }

    public saveDetailsDesing(Detalle_disenio: Detalle_disenio): Observable<RestResponse> {
        return this.http.post<RestResponse>("http://localhost:3000/Desing", Detalle_disenio);
    }

    public showDesing(id: Number): Observable<RestResponse> {
        return this.http.get<RestResponse>("http://localhost:3000/showDesing/" + id);
    }

    public informationOnePage(id: Number): Observable<RestResponse> {
        return this.http.get<RestResponse>("http://localhost:3000/InfoOnePage/" + id);
    }
}