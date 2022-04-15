import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokerRoutingModule } from './poker-routing.module';
import { PokerComponent } from './poker.component';


@NgModule({
  declarations: [
    PokerComponent
  ],
  imports: [
    CommonModule,
    PokerRoutingModule
  ]
})
export class PokerModule { }
