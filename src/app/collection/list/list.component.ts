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
    }

    private getData() {
        this._remote.calculateCurrentAvgPrice()
    }
    
    ngOnInit() {
        this.getData();
    }
}
