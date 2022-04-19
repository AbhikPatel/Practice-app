import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-container',
  templateUrl: './shopping-container.component.html',
  styleUrls: ['./shopping-container.component.scss']
})
export class ShoppingContainerComponent implements OnInit {

  public getEmailId$:Observable<any>;
  public customerMail:string;
  constructor(private service:ShoppingService) { 
    this.getEmailId$ = new Observable();
  }

  ngOnInit(): void {
    this.getEmailId$ = this.service.getByEmail(this.customerMail); 
  }

  public emitCustomerMail(mail:string){
    this.customerMail = mail;
  }

}
