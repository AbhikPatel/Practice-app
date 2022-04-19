import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { ShoppingContainerComponent } from './shopping-container/shopping-container.component';
import { ShoppingPresentationComponent } from './shopping-container/shopping-presentation/shopping-presentation.component';
import { CreatePresentationComponent } from './shopping-container/shopping-presentation/create-presentation/create-presentation.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingService } from './shopping.service';
import { FinalPresentationComponent } from './shopping-container/shopping-presentation/final-presentation/final-presentation.component';


@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingContainerComponent,
    ShoppingPresentationComponent,
    CreatePresentationComponent,
    FinalPresentationComponent,
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    OverlayModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    ShoppingService
  ]
})
export class ShoppingModule { }
