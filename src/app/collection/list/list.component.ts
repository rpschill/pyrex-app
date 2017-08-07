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
        return this._remote.getData()
            .then(data => data.json());
    }

    private calculateAverage(data) {
        let length = data.length;
        let avg = 0;
        let runningTotal = 0;

        for (let i = 0; i <= length; i++) {
            if (data[i].price) {
                runningTotal += Number(data[i].price);
            }
        }

        return runningTotal / length;
    }
    
    ngOnInit() {
        this.response = this.getData();
        console.log('this.response: ', this.response);
    }
}
