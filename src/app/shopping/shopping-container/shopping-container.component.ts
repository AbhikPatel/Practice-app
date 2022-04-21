import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-container',
  templateUrl: './shopping-container.component.html',
  styleUrls: ['./shopping-container.component.scss']
})
export class ShoppingContainerComponent implements OnInit {

  public getData$:Observable<any>;
  constructor(private service:ShoppingService) { 
    this.getData$ = new Observable();
  }

  ngOnInit(): void {
    this.getData$ = this.service.getData();
  }

}
