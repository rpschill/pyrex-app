import { Injectable } from '@angular/core';
import { Http, Response, Headers, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RemoteService {

    private etsyUrl: string = 'https://openapi.etsy.com/v2/listings/active.js?api_key=byl1k0uc18ste5t3c6qhm6rd&tags=gooseberry,pyrex,441&callback=JSONP_CALLBACK';
    private response;
    private itemList;
    private average;



    constructor(private _http: Http, private _jsonp: Jsonp) { }

    public getData() {
        return this._jsonp.get(this.etsyUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log( 'body: ', body );
        let runningTotal = 0;
        let avg = 0;
        let data = body.results;
        let length = data.length;
        let results = {};

        for ( let i = 0; i <= length; i++ ) {
            if ( data[ i ] ) {
                runningTotal += Number( data[ i ].price );
            }
        }

        results[ 'avg' ] = runningTotal / length;
        results[ 'length' ] = length;
        results[ 'timestamp' ] = new Date();

        return results;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private calculateCurrentAvgPrice(response) {
        let runningTotal = 0;
        let avg;
        /*for ( var i = 0; i <= response.length; i++ ) {
            if ( response[ i ] ) {
                runningTotal += Number( response[ i ].price );
                console.log( 'price: ', response[ i ].price );
                console.log( 'running total: ', runningTotal );
            }
            else {
                console.log( 'no price' );
            }
        }
        avg = runningTotal / response.length;
        return avg;*/
    }

}
