import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionWrapperComponent } from './collection-wrapper/collection-wrapper.component';
import { ListComponent } from './list/list.component';
import { EditorComponent } from './editor/editor.component';

const collectionRoutes: Routes = [
    {
        path: '',
        component: CollectionWrapperComponent,
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'edit',
                component: EditorComponent
            }
        ]
    }
]

@NgModule( {
    imports: [
        RouterModule.forChild( collectionRoutes )
    ],
    exports: [
        RouterModule
    ]
} )
export class CollectionRoutingModule { }
