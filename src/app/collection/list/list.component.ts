import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../remote.service';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    private etsyUrl: string;
    private response = {};
    public itemList;
    public results;
    public average;
    public length;
    public timestamp;

    constructor( private _remote: RemoteService ) {
    }

    private getData() {
        return this._remote.getData()
            .then( data => {
                this.average = data.avg;
                this.timestamp = data.timestamp;
                if ( data.length === 1 ) {
                    this.length = 'Based on one item at ';
                }
                else if ( data.length > 1 ) {
                    this.length = 'Based on ' + data.length + ' items at ';
                }
            });
    }
    
    ngOnInit() {
        this.getData()
    }
}
