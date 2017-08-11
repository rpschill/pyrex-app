import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PatternsService {

    constructor( private _http: Http ) { }
    
    private patternUrl = '../../assets/MOCK_DATA.json';

    public getPatternList() {
        return this._http
            .get( this.patternUrl )
            .toPromise()
            .then( this.extractData );
    }
    
    public getPatternDetail(id) {
        return this._http
            .get( this.patternUrl )
            .toPromise()
            .then( res => {
                return res.json().filter( item => item.id === id )[ 0 ];
            } )
            .catch( this.handleError );
    }

    private extractData( res: Response ) {
        return res.json();
    }

    private handleError( error: any ): Promise<any> {
        console.error( 'An error occurred', error );
        return Promise.reject( error.message || error );
    }

}
