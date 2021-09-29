import { Automovel } from '../models/automovel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AutomovelService {

    private baseURL = "http://localhost:5000/api/automovel"

    constructor(private http: HttpClient) { }

    create(automovel: Automovel): Observable<Automovel>{
        return this.http.post<Automovel>(`${this.baseURL}/create`, automovel);
    }

    list() : Observable<Automovel[]>{
        return this.http.get<Automovel[]>(`${this.baseURL}/list`);
    }

}