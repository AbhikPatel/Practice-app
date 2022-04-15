import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { FilterFormPresentationComponent } from './filter-form-presentation/filter-form-presentation.component';

@Component({
  selector: 'app-filter-demo',
  templateUrl: './filter-demo.component.html',
  styleUrls: ['./filter-demo.component.scss']
})
export class FilterDemoComponent implements OnInit {

  public notification: boolean;
  public nodatafound: boolean;
  public filterData: any;
  public copyData: any;
  public finalData: any;
  public tableData: any;
  public count: boolean;
  constructor(private overlay: Overlay) {
    this.notification = false;
    this.nodatafound = false;
    this.count = false;
  }

  ngOnInit(): void {
    this.tableData = this.Employees
  }

  ngDoCheck() {
    this.count = false;

    if (!this.notification) {
      this.tableData = this.Employees;
    }
  }

  Employees: any[] = [
    { id: 1, fname: 'Abhishek', age: 22, gender: 'Male', phone: 9925607945, salary: 15000, company: '1Rivet', city: 'Valsad' },
    { id: 2, fname: 'Ankit', age: 21, gender: 'Male', phone: 9925607945, salary: 150000, company: '1Rivet', city: 'Vapi' },
    { id: 4, fname: 'Nirali', age: 12, gender: 'Female', phone: 9925607945, salary: 5000, company: '1Rivet', city: 'Valsad' },
    { id: 3, fname: 'Aman', age: 21, gender: 'Male', phone: 9925607945, salary: 25000, company: '1Rivet', city: 'Vapi' },
    { id: 4, fname: 'Pooja', age: 23, gender: 'Female', phone: 9925607945, salary: 5000, company: '1Rivet', city: 'Valsad' },
    { id: 5, fname: 'Dharmit', age: 25, gender: 'Male', phone: 9925607945, salary: 35000, company: '1Rivet', city: 'Surat' },
    { id: 6, fname: 'Tanmay', age: 24, gender: 'Male', phone: 9925607945, salary: 35000, company: '1Rivet', city: 'Surat' },
    { id: 4, fname: 'Shreya', age: 20, gender: 'Female', phone: 9925607945, salary: 5000, company: '1Rivet', city: 'Valsad' },
    { id: 7, fname: 'Viral', age: 27, gender: 'Male', phone: 9925607945, salary: 45000, company: '1Rivet', city: 'Gandevi' },
    { id: 8, fname: 'Sushil', age: 'Infinity', gender: 'Others', phone: 9925607945, salary: 999999999, company: '1Rivet', city: 'Atul' },
  ];

  public onFilter() {
    const OverlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    })

    const component = new ComponentPortal(FilterFormPresentationComponent)
    const componentRef = OverlayRef.attach(component);

    componentRef.instance.emitCancel.subscribe(() => {
      OverlayRef.detach();
    })

    componentRef.instance.emitFilterData.subscribe((data) => {
      this.filterData = data;

      let Keys = Object.keys(this.filterData)

      Keys.forEach((items: any) => {
        if (this.filterData[items]) {
          this.count = true;
        }
      })

      if (this.count) {
        this.filtering();
        this.notification = true;
      } else {
        this.notification = false;
      }

      OverlayRef.detach();
    });

    if (this.filterData) {
      componentRef.instance.listdata = this.filterData;
    }
  }

  public filtering() {

    if (!this.copyData) {
      this.copyData = [...this.Employees]
    }

    let Keys = Object.keys(this.filterData);

    Keys.forEach((items: any) => {
      if (this.filterData[items]) {
        this.finalData = this.copyData.filter((data: any) => {
          return data[items] === this.filterData[items]
        })
      }
    })
    this.tableData = this.finalData;

    if (this.finalData.length === 0) {
      this.nodatafound = true;
    } else {
      this.nodatafound = false;
    }
  }
}
