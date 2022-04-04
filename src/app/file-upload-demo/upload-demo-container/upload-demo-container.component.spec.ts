import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDemoContainerComponent } from './upload-demo-container.component';

describe('UploadDemoContainerComponent', () => {
  let component: UploadDemoContainerComponent;
  let fixture: ComponentFixture<UploadDemoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDemoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDemoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
