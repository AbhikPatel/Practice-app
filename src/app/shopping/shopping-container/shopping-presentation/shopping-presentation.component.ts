import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingPresenterService } from '../shopping-presenter/shopping-presenter.service';

@Component({
  selector: 'app-shopping-presentation',
  templateUrl: './shopping-presentation.component.html',
  styleUrls: ['./shopping-presentation.component.scss'],
  viewProviders: [ShoppingPresenterService]
})
export class ShoppingPresentationComponent implements OnInit {

  @Input() public set userDetails(v: any) {
    this._userDetails = v;
  }

  public get userDetails(): any {
    return this._userDetails;
  }


  @Output() public emitCustomerMail: EventEmitter<string>;
  private _userDetails: any;
  constructor(private serivce: ShoppingPresenterService) {
    this.emitCustomerMail = new EventEmitter();
  }

  ngOnInit(): void {
    this.serivce.customerMail$.subscribe((mail) => {
      this.emitCustomerMail.emit(mail);
    })
  }

  public onCreate() {
    this.serivce.openCreate();
  }
}
