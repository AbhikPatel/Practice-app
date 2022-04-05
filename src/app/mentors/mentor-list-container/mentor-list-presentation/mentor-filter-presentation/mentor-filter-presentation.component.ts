import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { mentorFilterModel } from 'src/app/mentors/mentorfilter.model';
import { MentorFilterPresenterService } from '../mentor-filter-presenter/mentor-filter-presenter.service';

@Component({
  selector: 'app-mentor-filter-presentation',
  templateUrl: './mentor-filter-presentation.component.html',
  styleUrls: ['./mentor-filter-presentation.component.scss'],
  viewProviders:[MentorFilterPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MentorFilterPresentationComponent implements OnInit {

  @Output() public emitFilterCancel:EventEmitter<boolean>;
  @Output() public emitFilterData:EventEmitter<mentorFilterModel>;
  public filterGroup:FormGroup
  constructor(private service:MentorFilterPresenterService) { 
    this.filterGroup = this.service.filterbuild();
    this.emitFilterCancel = new EventEmitter();
    this.emitFilterData = new EventEmitter();
  }

  ngOnInit(): void {
    this.service.filterData$.subscribe(data => {
      this.emitFilterData.emit(data);
    })
  }

  public onSubmit(){
   this.service.getFormData(this.filterGroup.value)
  }

  public onCancel(){
    this.emitFilterCancel.emit();
  }
}
