import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'app',
                loadChildren: 'app/collection/collection.module#CollectionModule'
            },
            {
                path: '',
                redirectTo: 'app',
                pathMatch: 'full'
            }
        ]
    }
]

@NgModule( {
    imports: [
        RouterModule.forRoot( appRoutes )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
} )
export class AppRoutingModule { }
