import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    results: string[];

    constructor( private http: HttpClient ) { }

}