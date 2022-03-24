import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpFormPresentationComponent } from './mvp-form-presentation.component';

describe('MvpFormPresentationComponent', () => {
  let component: MvpFormPresentationComponent;
  let fixture: ComponentFixture<MvpFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
