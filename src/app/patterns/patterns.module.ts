import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatternsRoutingModule } from './patterns-routing.module';
import { PatternsWrapperComponent } from './patterns-wrapper/patterns-wrapper.component';
import { PatternsService } from './patterns.service';
import { PatternListComponent } from './pattern-list/pattern-list.component';

@NgModule({
  imports: [
    CommonModule,
    PatternsRoutingModule
  ],
  declarations: [
      PatternsWrapperComponent,
      PatternListComponent
  ],
  providers: [
      PatternsService
  ]
})
export class PatternsModule { }
