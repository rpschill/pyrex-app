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
    private response;
    public itemList;
    public results;
    public average;

    constructor( private _remote: RemoteService ) {
        this.etsyUrl = 'https://openapi.etsy.com/v2/listings/active.js?api_key=byl1k0uc18ste5t3c6qhm6rd&tags=gooseberry,pyrex,441&callback=JSONP_CALLBACK';
    }
    
    ngOnInit() {
        this.getData();
        console.log(this.itemList);
    }

    private getData() {
        this._remote.calculateCurrentAvgPrice()
            .then( data => this.average = data );
    }
}
