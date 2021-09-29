import { Produto } from '../models/produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProdutoService {

    private baseURL = "http://localhost:5000/api/produto"

    constructor(private http: HttpClient) { }

    create(produto: Produto): Observable<Produto>{
        return this.http.post<Produto>(`${this.baseURL}/create`, produto);
    }

    list() : Observable<Produto[]>{
        return this.http.get<Produto[]>(`${this.baseURL}/list`);
    }

}