import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-presentation',
  templateUrl: './final-presentation.component.html',
  styleUrls: ['./final-presentation.component.scss']
})
export class FinalPresentationComponent implements OnInit {

  @Input() public customerData:any;
  constructor() { }

  ngOnInit(): void {
  }

  

}
