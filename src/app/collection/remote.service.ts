import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RemoteService {

    results: any = {};
    
    private etsyUrl = 'https://openapi.etsy.com/v2/listings/active?api_key=byl1k0uc18ste5t3c6qhm6rd&tags=gooseberry,pyrex,441';

    constructor( private http: Http ) { 
    }

    getData() {
        return this.http
            .get( this.etsyUrl )
            .map(( res: Response ) => res.json() )
    }
    
    getPyrex() {
        this.getData()
            .subscribe( data => {
                console.log( data );
                this.results = data;
            })
    }    
}
