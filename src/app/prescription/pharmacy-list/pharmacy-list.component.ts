import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-pharmacy-list',
  templateUrl: './pharmacy-list.component.html',
  styles: [
  ]
})
export class PharmacyListComponent implements OnInit {

  public pharmacyData:any[];
  public selected:any;
  constructor(private service:PrescriptionService) { 
  }

  ngOnInit(): void {
    this.service.getPharmacy().subscribe(data => {
      this.pharmacyData = data;
      this.selected = data[0].name;  
    })
  }

}
