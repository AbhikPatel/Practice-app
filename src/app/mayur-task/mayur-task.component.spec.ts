import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayurTaskComponent } from './mayur-task.component';

describe('MayurTaskComponent', () => {
  let component: MayurTaskComponent;
  let fixture: ComponentFixture<MayurTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayurTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MayurTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
