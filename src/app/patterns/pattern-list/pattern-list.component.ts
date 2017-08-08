import { Component, OnInit } from '@angular/core';
import { PatternsService } from '../patterns.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component( {
    selector: 'app-pattern-list',
    templateUrl: './pattern-list.component.html',
    styleUrls: [ './pattern-list.component.css' ]
} )
export class PatternListComponent implements OnInit {

    public patterns;

    constructor( private _service: PatternsService ) { }

    ngOnInit() {
        this.getPatterns();
    }

    private getPatterns() {
        this._service.getPatterns()
            .then( data => {
                console.log( 'data: ', data );
                this.patterns = data;
                return this.patterns;
            });
    }

}
