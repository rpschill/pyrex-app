import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionWrapperComponent } from './collection-wrapper/collection-wrapper.component';
import { ListComponent } from './list/list.component';
import { EditorComponent } from './editor/editor.component';
import { RemoteService } from './remote.service';

@NgModule( {
    imports: [
        CommonModule,
        CollectionRoutingModule
    ],
    declarations: [
        CollectionWrapperComponent,
        ListComponent,
        EditorComponent
    ],
    providers: [
        RemoteService
    ]
} )
export class CollectionModule { }
