import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatternsWrapperComponent } from './patterns-wrapper/patterns-wrapper.component';
import { PatternListComponent } from './pattern-list/pattern-list.component';

const routes: Routes = [
    {
        path: '',
        component: PatternsWrapperComponent,
        children: [
            {
                path: '',
                component: PatternListComponent
            }
        ]

    }
];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class PatternsRoutingModule { }
