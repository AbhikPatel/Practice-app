import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styles: [
  ]
})
export class FormTwoComponent implements OnInit {

  constructor(private service:ProgressService) { }

  ngOnInit(): void {
  }

  public onPrevious(){
    this.service.$previous.next(2);
  }

  public onNext(){
    this.service.$getform1.next(3);
  }

}
