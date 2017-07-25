import { Injectable } from '@angular/core';
import { Http, Response, Headers, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RemoteService {

    private etsyUrl: string;
    private response;
    private itemList;
    private average;

    constructor( private _http: Http, private _jsonp: Jsonp ) {
        this.etsyUrl = 'https://openapi.etsy.com/v2/listings/active.js?api_key=byl1k0uc18ste5t3c6qhm6rd&tags=gooseberry,pyrex,441&callback=JSONP_CALLBACK';
    }

    public getData() {
        this.itemList = this._jsonp.request( this.etsyUrl, { method: 'Get' } )
            .map(( data: any ) => data.json() )
            .subscribe(( data: any ) => this.itemList = data.results );
        setTimeout( this.calculateCurrentAvgPrice(), 2000 );
        console.log('this.average: ', this.average );
        return this.average;
    }

    private calculateCurrentAvgPrice() {
        console.log( this.itemList.results );

        let runningTotal = 0;
        let avg;
        for ( var i = 0; i <= this.itemList.length; i++ ) {
            if ( this.itemList[ i ] ) {
                runningTotal += Number( this.itemList[ i ].price );
                console.log( 'price: ', this.itemList[ i ].price );
                console.log( 'running total: ', runningTotal );
            }
            else {
                console.log( 'no price' );
            }
        }
        this.average = runningTotal / this.itemList.length;
        console.log( 'average: ', this.average );
    }

}
