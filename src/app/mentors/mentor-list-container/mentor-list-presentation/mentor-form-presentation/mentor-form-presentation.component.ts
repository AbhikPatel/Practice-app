import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { mentorsModel } from 'src/app/mentors/mentor.model';
import { EventEmitter } from '@angular/core';
import { MentorFormPresenterService } from '../mentor-form-presenter/mentor-form-presenter.service';

@Component({
  selector: 'app-mentor-form-presentation',
  templateUrl: './mentor-form-presentation.component.html',
  styleUrls: ['./mentor-form-presentation.component.scss'],
  viewProviders:[MentorFormPresenterService],
})
export class MentorFormPresentationComponent implements OnInit {

  @Input() public edittoData:mentorsModel
  @Output() public emitFormData:EventEmitter<mentorsModel>;
  @Output() public closeData : EventEmitter<Event>;
  public formhead:string = 'Add User';
  public mentorGroup:FormGroup;
  private editMode:boolean;
  constructor(private formservice:MentorFormPresenterService) { 
    this.mentorGroup = this.formservice.group();
    this.emitFormData = new EventEmitter<mentorsModel>();
    this.closeData = new EventEmitter();
    this.editMode = false;
  }

  ngOnInit(): void {
    this.formservice.formData$.subscribe((data) => {
      this.emitFormData.emit(data);
    })

    if(this.edittoData){
      this.editMode = true;
      this.formhead = 'Update User'
      this.mentorGroup.patchValue(this.edittoData);
    }
  }

  public onSubmit(){
    this.formservice.getData(this.mentorGroup.value)
  }

  public onCancel(){
    this.closeData.emit();
  }
}
