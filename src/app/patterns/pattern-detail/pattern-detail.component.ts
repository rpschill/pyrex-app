import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PatternsService } from '../patterns.service';
import 'rxjs/add/operator/switchMap';

@Component( {
    selector: 'app-pattern-detail',
    templateUrl: './pattern-detail.component.html',
    styleUrls: [ './pattern-detail.component.css' ]
} )
export class PatternDetailComponent implements OnInit {

    public pattern;
    public id;

    constructor(
        private _service: PatternsService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    private fetchData() {
        return this._route.params.subscribe( params => {
            if ( params[ 'id' ] !== undefined ) {
                this.id = +params[ 'id' ];
                this.getPattern( this.id )
                    .then( data => this.pattern = data );
            }
        })
    }

    private getPattern( pattern ) {
        return this._service.getPatternDetail( pattern )
            .then( data => data );
    }

    ngOnInit() {
        this.fetchData();
        console.log(this.pattern)
    }

}
