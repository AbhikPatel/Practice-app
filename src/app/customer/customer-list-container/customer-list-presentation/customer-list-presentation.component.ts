import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerData } from '../../customer.model';
import { CustomerListPresenterService } from '../customer-list-presenter/customer-list-presenter.service';

@Component({
  selector: 'app-customer-list-presentation',
  templateUrl: './customer-list-presentation.component.html',
  styleUrls: ['./customer-list-presentation.component.scss'],
  viewProviders:[CustomerListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CustomerListPresentationComponent implements OnInit {

  @Input() public set list(listdata:CustomerData[] | null){
    if(listdata){
      this._listdata = listdata;
    }
  }

  public get list():CustomerData[]{
    return this._listdata;
  }

  @Input() public set edit(editdata:CustomerData | null){
    if(editdata){
      this._editdata = editdata;
    }
  }

  public get edit():CustomerData{
    return this._editdata;
  }

  @Output() emitOverlayAdd:EventEmitter<CustomerData>;
  @Output() emitOverlayEdit:EventEmitter<CustomerData>;
  @Output() emitDeleteid:EventEmitter<number>;
  @Output() emitEditid:EventEmitter<number>;

  private _listdata:CustomerData[];
  private _editdata:CustomerData;
  public getid ?: number;
  constructor(private service:CustomerListPresenterService) { 
    this.emitOverlayAdd = new EventEmitter<CustomerData>();
    this.emitOverlayEdit = new EventEmitter<CustomerData>();
    this.emitDeleteid = new EventEmitter<number>();
    this.emitEditid = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.service.addData$.subscribe((data) => {
      this.emitOverlayAdd.emit(data)
    })
    this.service.editData$.subscribe((data) => {
      
    })
  }

  public openform(id?:number,data?:CustomerData){
    this.service.open(data);
    this.getid = id;
  }

  public onDelete(id:number){
    this.emitDeleteid.emit(id);
  }

}
