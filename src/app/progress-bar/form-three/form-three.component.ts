import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styles: [
  ]
})
export class FormThreeComponent implements OnInit {

  constructor(private service:ProgressService) { }

  ngOnInit(): void {
  }

  public onPrevious(){
    this.service.$previous.next(3);
  }

  public onNext(){
    this.service.$getform1.next(4);
  }

}
