import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../remote.service';

@Component( {
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: [ './editor.component.css' ]
} )
export class EditorComponent implements OnInit {

    itemList;

    constructor( private remote: RemoteService ) { }

    ngOnInit() {
    }

}
