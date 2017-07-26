import { Injectable } from '@angular/core';
import { Http, Response, Headers, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RemoteService {

    private etsyUrl: string;
    private response;
    private itemList;
    private average;

    constructor( private _http: Http, private _jsonp: Jsonp ) {
        this.etsyUrl = 'https://openapi.etsy.com/v2/listings/active.js?api_key=byl1k0uc18ste5t3c6qhm6rd&tags=gooseberry,pyrex,441&callback=JSONP_CALLBACK';
    }

    private getData(): Promise<Object[]> {
        return this._jsonp.get( this.etsyUrl )
            .toPromise()
            .then( response => response.json().results )
    }

    /*public getData() {
        return this.itemList = this._jsonp.request( this.etsyUrl, { method: 'Get' } )
            .map(( data: any ) => data.json() )
            .subscribe(( data: any ) => this.itemList = data.results );
        setTimeout( this.calculateCurrentAvgPrice(), 2000 );
        console.log('this.average: ', this.average );
        return this.average;
    }*/

    /*public getData() {
        return this._jsonp.request( this.etsyUrl, { method: 'Get' } )
            .toPromise()
            .then( this.mapItems );
    }

    private mapItems( response: Response ) {
        return response.json().results;
    }*/

    public calculateCurrentAvgPrice() {
        let results;
        this.getData()
            .then( data => results = data );
        console.log( 'results: ', results );
        let runningTotal = 0;
        let avg;
        /*for ( var i = 0; i <= results.length; i++ ) {
            if ( results[ i ] ) {
                runningTotal += Number( results[ i ].price );
                console.log( 'price: ', results[ i ].price );
                console.log( 'running total: ', runningTotal );
            }
            else {
                console.log( 'no price' );
            }
        }
        avg = runningTotal / results.length;*/
        return avg;
    }

}
