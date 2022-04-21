import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { productModel } from 'src/app/shopping/shopping.model';
import { CreatePresenterService } from '../create-presenter/create-presenter.service';

@Component({
  selector: 'app-create-presentation',
  templateUrl: './create-presentation.component.html',
  styleUrls: ['./create-presentation.component.scss'],
  viewProviders:[CreatePresenterService],
})
export class CreatePresentationComponent implements OnInit {

  @Output() public emitSubmitData:EventEmitter<string>;

  public productGroup:FormGroup;
  public productList:productModel[];
  public btnName:string;
  public editId:number;
  public customerEmail:string;

  constructor(private service:CreatePresenterService) { 
    this.productList = [];
    this.btnName = '+ Add';
    this.productGroup = this.service.group();
    this.emitSubmitData = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public onAdd(){
    this.btnName === 'Edit' ? this.productList[this.editId] = this.productGroup.value : this.productList.push(this.productGroup.value);
    this.productGroup.reset();
    this.btnName = '+ Add';
  }

  public onDelete(id:number){
    this.productList.splice(id,1)
  }

  public onEdit(id:number){
    this.productGroup.patchValue(this.productList[id]);
    this.editId = id;
    this.btnName = 'Edit';
  }

  public onSubmit(){
    this.emitSubmitData.emit(this.customerEmail);
  }

  public onCancel(){
    this.emitSubmitData.emit();
  }
}
