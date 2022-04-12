import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDemoRoutingModule } from './card-demo-routing.module';
import { CardDemoComponent } from './card-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { CardDemoService } from './card-demo.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardDemoComponent
  ],
  imports: [
    CommonModule,
    CardDemoRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    CardDemoService
  ]
})
export class CardDemoModule { }
