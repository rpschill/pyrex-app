import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../remote.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    itemList;

    constructor( private remote: RemoteService ) { }

    getPyrex() {
        return this.remote
            .getPyrex()
    }

    ngOnInit(): void {
        this.itemList = this.getPyrex();
        console.log( this.itemList );
    }

}
