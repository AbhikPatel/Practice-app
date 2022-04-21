import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingPresenterService } from '../shopping-presenter/shopping-presenter.service';

@Component({
  selector: 'app-shopping-presentation',
  templateUrl: './shopping-presentation.component.html',
  styleUrls: ['./shopping-presentation.component.scss'],
  viewProviders: [ShoppingPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ShoppingPresentationComponent implements OnInit {

  @Input() public set userDetails(v: any) {
    this._userDetails = v;
    console.log(this._userDetails);
  }

  public get userDetails(): any {
    return this._userDetails;
  }

  private _userDetails: any;
  public getIdUser:any;

  constructor(private serivce: ShoppingPresenterService) {
  }

  ngOnInit(): void {
  }
  
  ngDoCheck(){
    this.serivce.customerMail$.subscribe((mail) => {
      console.log(mail);
      this.getIdUser = this._userDetails.find((items:any) => {
        return items.email === mail;
      })
    }) 
    
  }

  public onCreate() {
    this.serivce.openCreate();
  }
}
