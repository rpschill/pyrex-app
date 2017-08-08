import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PatternsService {

    constructor( private _http: Http ) {}

    public getPatterns() {
        return this._http
            .get( '../../assets/MOCK_DATA.json' )
            .toPromise()
            .then( this.extractData );
    }

    private extractData( res: Response ) {
        return res.json();
    }

    private handleError( error: any ): Promise<any> {
        console.error( 'An error occurred', error );
        return Promise.reject( error.message || error );
    }

}
