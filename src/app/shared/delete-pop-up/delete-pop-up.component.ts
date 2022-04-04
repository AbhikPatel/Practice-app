import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-pop-up',
  templateUrl: './delete-pop-up.component.html',
  styleUrls: ['./delete-pop-up.component.scss']
})
export class DeletePopUpComponent implements OnInit {

  @Output() public emitNo:EventEmitter<boolean>;
  @Output() public emitYes:EventEmitter<boolean>;
  constructor() { 
    this.emitNo = new EventEmitter<boolean>();
    this.emitYes = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  public onYes(){
    this.emitYes.emit();
  }

  public onNo(){
    this.emitNo.emit();
  }
}
