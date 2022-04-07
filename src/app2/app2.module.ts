import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { App2RoutingModule } from './app2-routing.module';
import { App2Component } from './app2.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    App2Component
  ],
  imports: [
    CommonModule,
    App2RoutingModule,
    BrowserModule
  ],
  bootstrap:[App2Component]
})
export class App2Module { }
