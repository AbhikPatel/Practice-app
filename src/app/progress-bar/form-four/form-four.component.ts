import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-form-four',
  templateUrl: './form-four.component.html',
  styles: [
  ]
})
export class FormFourComponent implements OnInit {

  constructor(private service:ProgressService) { }

  ngOnInit(): void {
  }

  public onPrevious(){
    this.service.$previous.next(4);
  }

}
