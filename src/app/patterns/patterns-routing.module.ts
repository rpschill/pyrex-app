import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatternsWrapperComponent } from './patterns-wrapper/patterns-wrapper.component';
import { PatternListComponent } from './pattern-list/pattern-list.component';
import { PatternDetailComponent } from './pattern-detail/pattern-detail.component';

const routes: Routes = [
    {
        path: 'detail/:id',
        component: PatternDetailComponent
    },
    {
        path: '',
        component: PatternListComponent
    }
];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class PatternsRoutingModule { }
